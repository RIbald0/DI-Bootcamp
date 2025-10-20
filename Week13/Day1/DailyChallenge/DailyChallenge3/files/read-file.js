const fs = require('fs')


const displayContent = () => {fs.readFile('file-data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(data)
    }
})
}

module.exports = {displayContent}