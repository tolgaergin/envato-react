// Module to control application life.
const path = require('path');
const url = require('url');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.menu;
const ipcMain = electron.ipcMain;
const shell = electron.shell;

const isDevelopment = (process.env.NODE_ENV === 'development');

const installExtensions = async () => {
  try {
    // react dev tools
    await BrowserWindow.addDevToolsExtension(
      '/Users/teamfox/' +
      'Library/Application Support/Google/Chrome/' +
      'Default/Extensions/' +
      'fmkadmapgofadopljbjfkapdkoienihi/2.0.12_0'
    );

    // redux dev tools
    await BrowserWindow.addDevToolsExtension(
      '/Users/teamfox/' +
      'Library/Application Support/Google/Chrome/' +
      'Default/Extensions/' +
      'lmhkpmbekcpmknklioeibfkpmmfibljd/2.14.1_0'
    );
  } catch (e) {
    console.log('errur');
  }
};

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

let forceQuit = false;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {

  if (isDevelopment) {
    await installExtensions();
  }

  // Create the browser window.
  if (isDevelopment) {
    mainWindow = new BrowserWindow({ width: 960, height: 680, show: false });
  } else {
    mainWindow = new BrowserWindow({ width: 375, height: 624, show: false });
  }

  // and load the index.html of the app.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow.loadURL(startUrl);

  // show window once on first load
  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.show();
  });

  mainWindow.webContents.on('did-finish-load', () => {
    // Handle window logic properly on macOS:
    // 1. App should not terminate if window has been closed
    // 2. Click on icon in dock should re-open the window
    // 3. ⌘+Q should close the window and quit the app
    if (process.platform === 'darwin') {
      mainWindow.on('close', function (e) {
        if (!forceQuit) {
          e.preventDefault();
          mainWindow.hide();
        }
      });

      app.on('activate', () => {
        mainWindow.show();
      });

      app.on('before-quit', () => {
        forceQuit = true;
      });
    } else {
      mainWindow.on('closed', () => {
        mainWindow = null;
      });
    }
  });

  if (isDevelopment) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // add inspect element on right click menu
    mainWindow.webContents.on('context-menu', (e, props) => {
      Menu.buildFromTemplate(
        [
          {
            label: 'Inspect element',
            click() {
              mainWindow.inspectElement(props.x, props.y);
            },
          },
        ]).popup(mainWindow);
    });
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

// app.on('activate', function () {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (mainWindow === null) {
//     createWindow();
//   }
// });

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg);  // prints "ping"
  event.sender.send('asynchronous-reply', 'async message');
});

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = 'synch message';
});

ipcMain.on('external-url', (event, arg) => {
  shell.openExternal(arg);
  event.returnValue = true;
});

ipcMain.on('authorize-user', (event, arg) => {
  const authWindow = new BrowserWindow({
    width: 400,
    height: 400,
    alwaysOnTop: true,
    autoHideMenuBar: true,
  });

  authWindow.loadURL('http://teamfox.co');
  authWindow.show();
  event.sender.send('authorize-user-reply', 'opened');

  authWindow.on('closed', () => {
    event.sender.send('authorize-user-reply', 'closed');
  });
});
