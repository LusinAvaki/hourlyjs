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

function each(array, promise) {
    let results = [];
    return array.reduce((previous, item) =>{
        return previous.then(()=> {
            return promise(item).then((data)=> {
                results.push(data);
                return results;
            });
        });
    }, Promise.resolve());
}

each(['./Users.json', './Users.backup.json'], readFile)
    .then((results) => console.log(results))
    .catch(error => (error));

