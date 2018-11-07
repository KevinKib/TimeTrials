const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {

  let w = 660 // 640+12;
  let h = 555 // 480+75;

  mainWindow = new BrowserWindow({
        title: "Speedrun",
        width: w,
        height : h,
        center: true,
        resizable: true,
        frame: true,
        movable: true
    });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});