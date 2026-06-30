const { app, BrowserWindow, Tray, Menu, shell, nativeImage, ipcMain, Notification } = require('electron');
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

// Path to the static assistant HTML (bypasses Next.js/React/Clerk entirely)
const ASSISTANT_HTML = path.join(__dirname, 'public', 'assistant.html');

let mainWindow;
let tray = null;
let nextProcess = null;
let expressProcess = null;
let storedAuthToken = null;
let reminderPoll = null;
const notifiedReminderIds = new Set();

function getFrontendUrl(pathname = '/') {
  const baseUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
  return new URL(pathname, baseUrl).toString();
}

function openDashboard() {
  shell.openExternal(getFrontendUrl('/'));
}

function requestBackend(pathname, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const http = require('http');
    const backendPort = process.env.BACKEND_PORT || 3001;
    const payload = body ? JSON.stringify(body) : null;
    const req = http.request({
      hostname: 'localhost',
      port: backendPort,
      path: pathname,
      method,
      headers: {
        ...(payload ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) } : {}),
        ...(storedAuthToken ? { Authorization: `Bearer ${storedAuthToken}` } : {}),
      },
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data || '{}'));
        } catch (error) {
          reject(error);
        }
      });
    });
    req.on('error', reject);
    if (payload) req.write(payload);
    req.end();
  });
}

async function pollAiReminders() {
  if (!storedAuthToken || !Notification.isSupported()) return;
  try {
    const payload = await requestBackend('/api/assistant/monitor');
    const reminders = Array.isArray(payload.reminders) ? payload.reminders : [];
    reminders.slice(0, 5).forEach((reminder) => {
      if (!reminder.id || notifiedReminderIds.has(reminder.id)) return;
      notifiedReminderIds.add(reminder.id);
      const notification = new Notification({
        title: reminder.title || 'ExecAI Reminder',
        body: reminder.message || 'Open ExecAI to review your plan.',
        silent: false,
      });
      notification.on('click', () => {
        openDashboard();
      });
      notification.show();
    });
  } catch (error) {
    console.warn('[Electron] reminder polling failed:', error.message);
  }
}

function startReminderPolling() {
  if (reminderPoll) clearInterval(reminderPoll);
  reminderPoll = setInterval(pollAiReminders, 60 * 1000);
  pollAiReminders();
}

function openAssistantPopup() {
  if (!mainWindow) {
    createWindow();
  } else {
    // Reload the HTML each time to reset state
    mainWindow.loadFile(ASSISTANT_HTML);
  }
  mainWindow.show();
  mainWindow.focus();
}

function getIconPath() {
  const candidates = [
    path.join(__dirname, 'public/tray.png'),
    path.join(__dirname, 'public/tray.jpg'),
    path.join(__dirname, 'public/favicon.ico'),
    path.join(__dirname, 'app/favicon.ico'),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate));
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 460,
    show: false,
    frame: false,
    transparent: true,
    resizable: false,
    hasShadow: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
    },
    title: 'ExecAI Assistant',
    icon: getIconPath()
  });

  // Load the pure HTML file — no Next.js, no Clerk, no React needed
  mainWindow.loadFile(ASSISTANT_HTML);

  mainWindow.on('blur', () => {
    // Small delay so clicks on the window itself aren't interpreted as blur
    setTimeout(() => {
      if (mainWindow && !mainWindow.isFocused()) {
        mainWindow.hide();
      }
    }, 150);
  });

  mainWindow.on('close', (event) => {
    if (!app.isQuiting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });
}

function createTray() {
  const iconPath = getIconPath();
  if (!iconPath) {
    console.warn('Tray icon not found, skipping tray creation');
    return;
  }
  
  try {
    const icon = nativeImage.createFromPath(iconPath).resize({ width: 24, height: 24 });
    tray = new Tray(icon);
  } catch (e) {
    console.warn('Tray icon not found, skipping tray creation');
    return;
  }

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open ExecAI Dashboard',
      click: () => openDashboard()
    },
    {
      label: 'Quick Add Task',
      click: () => openAssistantPopup()
    },
    { type: 'separator' },
    {
      label: 'Quit ExecAI',
      click: () => {
        app.isQuiting = true;
        app.quit();
      }
    }
  ]);
  
  tray.setToolTip('ExecAI - Your Execution Assistant');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : openAssistantPopup();
  });
}

function startServices() {
  expressProcess = spawn('npm', ['run', 'start:server'], {
    cwd: __dirname,
    shell: true,
    env: process.env
  });

  expressProcess.stdout.on('data', (data) => console.log(`Backend: ${data}`));
  expressProcess.stderr.on('data', (data) => console.error(`Backend Error: ${data}`));

  const nextCommand = process.env.NODE_ENV === 'production' ? 'start' : 'dev';
  nextProcess = spawn('npm', ['run', nextCommand], {
    cwd: __dirname,
    shell: true,
    env: process.env
  });

  nextProcess.stdout.on('data', (data) => console.log(`Frontend: ${data}`));
}

ipcMain.on('close-assistant', () => {
  if (mainWindow) mainWindow.hide();
});

ipcMain.on('open-dashboard', () => {
  openDashboard();
});

// Store auth token sent from the dashboard
ipcMain.on('store-auth-token', (_event, token) => {
  storedAuthToken = token;
  console.log('[Electron] Auth token stored');
  startReminderPolling();
});

// Let the assistant HTML query the stored token
ipcMain.handle('get-auth-status', () => {
  return { hasToken: !!storedAuthToken };
});

// Add task via IPC — called from assistant window which has no Clerk session
ipcMain.handle('add-task', async (_event, input) => {
  if (!storedAuthToken) {
    return { error: 'Not authenticated. Please open the ExecAI Dashboard first to log in, then try again.' };
  }
  return new Promise((resolve) => {
    try {
      requestBackend('/api/tasks/quickadd', 'POST', { input })
        .then((parsed) => parsed.error ? resolve({ error: parsed.error }) : resolve({ task: parsed }))
        .catch((err) => {
          console.error('[Electron] add-task http error:', err);
          resolve({ error: `Cannot reach backend: ${err.message}` });
        });
    } catch (err) {
      console.error('[Electron] add-task error:', err);
      resolve({ error: err.message || 'Unknown error' });
    }
  });
});

app.whenReady().then(() => {
  if (process.env.START_SERVICES === 'true') {
     startServices();
  }
  
  setTimeout(() => {
    createWindow();
    createTray();
  }, 2000);

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('before-quit', () => {
  app.isQuiting = true;
  if (reminderPoll) clearInterval(reminderPoll);
  if (expressProcess) expressProcess.kill();
  if (nextProcess) nextProcess.kill();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
