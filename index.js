'use strict'

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on("window-all-closed", () => {
    app.quit();
});

app.on("ready", () => {
    mainWindow = new BrowserWindow();
    mainWindow.loadFile("index.html");
    mainWindow.on("closed", () => {
        mainWindow = null;
    });
});


