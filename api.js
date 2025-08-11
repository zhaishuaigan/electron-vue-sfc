module.exports = {
    openFile: async (options = {}) => {
        const { dialog } = require('electron');
        const { canceled, filePaths } = await dialog.showOpenDialog(options);
        if (!canceled) {
            return filePaths[0];
        }
        return null;
    },
    rename: async (path, name) => {
        const fs = require('fs');
        await fs.promises.rename(path, name);
        return true;
    },
    deleteFile: async (path) => {
        const fs = require('fs');
        await fs.promises.unlink(path);
        return true;
    },
    copy: async (path, newPath, options = {}) => {
        var fs = require('fs');
        await fs.promises.cp(path, newPath, options);
        return true;
    },
    openDir: async () => {
        const { dialog } = require('electron');
        console.log('dialog', dialog);
        const { canceled, filePaths } = await dialog.showOpenDialog({
            properties: ['openDirectory']
        });
        if (!canceled) {
            console.log(filePaths[0]);
            return filePaths[0];
        }
        return null;
    },
    readFile: (name) => {
        const fs = require('fs');
        if (!fs.existsSync(name)) {
            return null;
        }
        return fs.readFileSync(name).toString();
    },
    hasFile: (name) => {
        const fs = require('fs');
        return fs.existsSync(name);
    },
    readJSON: (name) => {
        const fs = require('fs');
        if (!fs.existsSync(name)) {
            return null;
        }
        return JSON.parse(fs.readFileSync(name).toString());
    },
    writeFile: (name, content) => {
        const fs = require('fs');
        fs.writeFileSync(name, content);
        return true;
    },

};