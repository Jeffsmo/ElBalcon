import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { spawn, execSync } from 'child_process';


process.env.DIST = path.join(__dirname, '../dist');
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    try {
      // Ejecutar lsof para obtener la lista de procesos en el puerto 3000
      const processes = execSync('lsof -i :3000').toString().split('\n');

      // Matar los procesos encontrados
      processes.forEach((processInfo) => {
        const pidString = processInfo.split(/\s+/)[1];
        const pid = parseInt(pidString, 10);

        if (!isNaN(pid)) {
          execSync(`kill -9 ${pid}`);
          console.log(`Successfully killed process with PID ${pid}`);
        }
      });
    } catch (error) {
      console.error(`Error killing processes on port 3000: ${error.message}`);
    }

    // Cerrar la aplicación después de matar los procesos
    app.quit();
    win = null;
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(() => {
  // Start the database
  const startDBProcess = spawn('npm', ['run', 'start-db'], { cwd: path.join(__dirname, '../API') });

  startDBProcess.stdout.on('data', (data) => {
    console.log(`Database process output: ${data}`);
  });

  startDBProcess.on('error', (err) => {
    console.error(`Error starting database process: ${err.message}`);
  });

  startDBProcess.on('close', (code) => {
    if (code === 0) {
      // Database process started successfully, now start API
      const startAPIProcess = spawn('npm', ['run', 'start-api'], { cwd: path.join(__dirname, '../API') });

      startAPIProcess.stdout.on('data', (data) => {
        console.log(`API process output: ${data}`);
      });

      startAPIProcess.on('error', (err) => {
        console.error(`Error starting API process: ${err.message}`);
      });
    } else {
      console.error(`Database process exited with code ${code}`);
    }
  });

  createWindow();
});
