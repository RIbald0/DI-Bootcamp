const fs = require('fs')

const readFile = (filepath, encoding, callback) => {
    fs.readFile(filepath, encoding, callback);
}

const writeFile = (filepath, content, encoding, callback) => {
    fs.writeFile(filepath, content, encoding, callback);
}

module.exports = {
    readFile,
    writeFile
}


