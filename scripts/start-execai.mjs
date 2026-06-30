import { spawn } from 'node:child_process';
import net from 'node:net';
import process from 'node:process';

const children = [];

function isPortOpen(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });
    server.listen(port);
  });
}

async function findPort(preferredPort, reservedPorts = new Set()) {
  for (let port = preferredPort; port < preferredPort + 50; port += 1) {
    if (reservedPorts.has(port)) continue;
    if (await isPortOpen(port)) return port;
  }
  throw new Error(`No free port found near ${preferredPort}`);
}

function waitForPort(port, label) {
  return new Promise((resolve, reject) => {
    const started = Date.now();
    const timeoutMs = 60000;

    const check = () => {
      const socket = net.createConnection(port, '127.0.0.1');
      socket.once('connect', () => {
        socket.end();
        resolve();
      });
      socket.once('error', () => {
        if (Date.now() - started > timeoutMs) {
          reject(new Error(`${label} did not start on port ${port}`));
          return;
        }
        setTimeout(check, 500);
      });
    };

    check();
  });
}

function run(label, command, args, options = {}) {
  const child = spawn(command, args, {
    stdio: 'inherit',
    shell: false,
    ...options,
  });

  children.push(child);
  child.on('exit', (code) => {
    if (code && !shuttingDown) {
      console.error(`${label} exited with code ${code}`);
      shutdown(code);
    }
  });

  return child;
}

let shuttingDown = false;
function shutdown(code = 0) {
  shuttingDown = true;
  for (const child of children) {
    if (!child.killed) child.kill();
  }
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const frontendPort = Number(process.env.FRONTEND_PORT) || await findPort(3000);
const backendPort = Number(process.env.PORT) || await findPort(3001, new Set([frontendPort]));
const frontendUrl = `http://localhost:${frontendPort}`;
const backendUrl = `http://localhost:${backendPort}`;

console.log(`Starting ExecAI frontend on ${frontendUrl}`);
console.log(`Starting ExecAI backend on ${backendUrl}`);

run('backend', npm, ['run', 'start:server'], {
  env: {
    ...process.env,
    PORT: String(backendPort),
    NEXT_PUBLIC_APP_URL: frontendUrl,
    CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});

run('frontend', npm, ['run', 'dev:frontend', '--', '-p', String(frontendPort)], {
  env: {
    ...process.env,
    NEXT_PUBLIC_API_URL: backendUrl,
  },
});

await Promise.all([
  waitForPort(frontendPort, 'frontend'),
  waitForPort(backendPort, 'backend'),
]);

run('electron', npm, ['run', 'electron'], {
  env: {
    ...process.env,
    FRONTEND_URL: frontendUrl,
    NEXT_PUBLIC_API_URL: backendUrl,
  },
});
