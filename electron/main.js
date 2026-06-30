const { app, Tray, Menu, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let tray = null;
let mainWindow = null;
let nextProcess = null;
let expressProcess = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false, // Start hidden in background
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Wait for Next.js to start
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:3000');
  }, 5000);

  mainWindow.on('close', (event) => {
    if (!app.isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });
}

function createTray() {
  tray = new Tray(path.join(__dirname, 'icon.png')); // Placeholder for icon
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open ExecAI', click: () => mainWindow.show() },
    { type: 'separator' },
    { label: 'Quit', click: () => {
      app.isQuitting = true;
      app.quit();
    }}
  ]);
  tray.setToolTip('ExecAI Background Agent');
  tray.setContextMenu(contextMenu);
  
  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });
}

function startServers() {
  const isDev = !app.isPackaged;

  if (isDev) {
    // Start Next.js
    nextProcess = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'dev'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'inherit'
    });

    // Start Express
    expressProcess = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run', 'dev'], {
      cwd: path.join(__dirname, '../server'),
      stdio: 'inherit'
    });
  }
}

app.whenReady().then(() => {
  startServers();
  createWindow();
  // createTray(); // Will uncomment when we have an icon
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('before-quit', () => {
  if (nextProcess) nextProcess.kill();
  if (expressProcess) expressProcess.kill();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
