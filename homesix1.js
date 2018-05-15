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

function all(contents) {
    let results = [];
    let completedPromises = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < contents.length; i++) {
            contents[i].then((data) => {
                results[i] = data;
                completedPromises += 1;
            if (completedPromises === contents.length) {
                return resolve(results);
            }
            }).catch(error => reject(error))
        }
    })
}

let p1 = readFile('./Users.json', 'utf8')
let p2 = readFile('./Users.backup.json', 'utf8')


let promiseToMake = [p1, p2];
let contents = all(promiseToMake);
contents.then(results=> console.log(results));
