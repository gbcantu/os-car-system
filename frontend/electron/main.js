const { app, BrowserWindow, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const rootPath = app.isPackaged ? app.getAppPath() : path.join(__dirname, "..");
  const indexFile = path.join(rootPath, "dist", "index.html");
  const preloadFile = path.join(rootPath, "electron", "preload.js");
  const iconFile = path.join(rootPath, "src", "assets", "logo.ico");

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: iconFile,
    webPreferences: {
      preload: preloadFile,
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadFile(indexFile).catch((error) => {
    dialog.showErrorBox(
      "Erro ao carregar a aplicação",
      `Não foi possível carregar ${indexFile}: ${error.message}`
    );
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
