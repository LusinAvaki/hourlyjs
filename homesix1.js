let fs = require('fs');

function readFile(path, options) {
    return new Promise((resolve, reject) => {
        return fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

let p1 = readFile('./Users.json', 'utf8');
let p2 = readFile('./Users.backup.json', 'utf8');
Promise.all([p1, p2])
    .then(data => console.log(data));
