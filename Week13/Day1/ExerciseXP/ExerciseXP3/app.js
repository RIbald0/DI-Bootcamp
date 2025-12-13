const { readFile, writeFile } = require('./fileManager.js');

readFile('HelloWorld.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    }

    writeFile('ByeWorld.txt', 'Writing to the file', 'utf-8', (err) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('File read and content successfully written to ByeWorld.txt.');
        }
});
});

