const {BrowserWindow, webContents, app, ipcMain} = require('electron')
const path = require('path')
const main = require('./main.js')

ipcMain.on('quitApp', () => {
	app.quit();
});
function LoginWindow() {
	const loginWindow = new BrowserWindow({
    width: 450,
    height: 350,
    alwaysOnTop: true,
    modal: true,
    frame: false,
    darkTheme: true,
    resizable: true,
    minimizable: true,
    maximizable: false,
    transparent: true,
    webPreferences: {
        devTools: false,
        preload: path.join(__dirname, 'preload.js')
    }
    // webPreferences: {
    //   	preload: path.join(__dirname, 'preload.js')
    // }
  })
	loginWindow.setMenu(null);
	loginWindow.openDevTools();
	loginWindow.loadFile('my-project/dist/index.html');
    //loginWindow.loadURL("http://localhost:8080/");
    
    ipcMain.on('win-close', (event,arg) => {
        console.log(arg);
        //loginWindow.close();
        app.quit();
    })

    ipcMain.on('win-minimize', (event,arg) => {
        console.log(arg);
        loginWindow.minimize();
    })

    ipcMain.on('login-ok', (event,arg) => {
        console.log("欢迎" + arg);
         function Close_login() {
            let test = new Promise((resolve,reject)=>{
                loginWindow.close();
                function re() {
                  return resolve;
                }
                setTimeout(re(),1000);
            })    
            return test;
        }
        var creawteMainWindow = async function () {
            var test = await Close_login();
            main.createWindow();    
        }
        creawteMainWindow();
        
    })
}

// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') {
//         console.log("quit")
//         app.quit()
//     }
// })

app.on('before-quit',function(){
//在应用程序开始关闭它的窗口的时候被触发
  console.log('before-quit start')
})

app.on('will-quit',function(){
//应用程序的窗口已经关闭，应用即将退出
  console.log('will-quit start')
})

app.on('quit',function(){
//应用程序正在退出
  console.log('quit start')
})

LoginWindow();