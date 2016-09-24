const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  let win = new BrowserWindow({
    width:800,
    height: 600,
    autoHideMenuBar: true
  })
  win.loadURL(`file://${__dirname}/src/index.html`)
  //win.webContents.openDevTools()
})
