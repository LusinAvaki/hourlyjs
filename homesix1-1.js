let fs = require('fs');

fs.readFile('./Users.json', 'utf8', function (err, contents) {
    console.log(contents);
    fs.copyFile('./Users.json', 'Users.backup.json', (err) => {
        if (err) throw err;
        console.log('source.txt was copied');
    });
});