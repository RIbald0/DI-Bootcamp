const fs = require('fs')

fs.readFile('source.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
        return;
    } 

    fs.writeFile('destination.txt', data, 'utf-8', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Write operation complete')
        }
    });
})

