let fs = require('fs');

function readFile(path, options) {
    return new Promise((resolve, reject) => {
        return fs.readFile(path, options, (err, data) => {
            if (err) {
                return Promise.reject(err)
            }
            return Promise.resolve(data)
        })
    })
}


Promise.resolve()
    .then(() => {
        fs.readFile('./Users.json', 'utf8', function (err, contents) {
            console.log(contents);
        });
    })
    .then(() => {
        fs.readFile('./Users.backup.json', 'utf8', function (err, contents) {
            console.log(contents);
        });
    })
    .catch(() => {
        console.log('error');

    });
