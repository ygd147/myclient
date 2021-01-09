// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

var createMainWindow = function  () {
 
  const mainWindow = new BrowserWindow({
    width: 1325,
    height: 625,
    show:true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // // and load the index.html of the app.
  // mainWindow.loadFile('my-project/dist/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

var createLoginWindow = function () {
  require('./login');

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createLoginWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createLoginWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  console.log(1)
  //if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
exports.createWindow = createMainWindow;