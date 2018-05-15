let fs = require('fs');

function readFile(path, options) {
    return new Promise((resolve, reject) => {
        return fs.readFile(path, options, (err, data) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(data);
            }
        })
    })
}

function map(data, promise) {
    return new Promise(function (resolve, reject) {
        let results = [];
        let counter = 0;
        for (let i = 0; i < data.length; i++) {
            promise(data[i])
                .then((result) => {
                    results[i] = result;
                    counter++;
                    if (counter === data.length) {
                        return resolve(results)
                    }
                }).catch(err => reject(err));
        }
    })
}

map(['./Users.json', './Users.backup.json'], readFile)
    .then(function (results) {
        console.log(results)
    })
    .catch(error => (error));
