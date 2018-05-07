let fs = require('fs');

let data = fs.readFileSync('./Users.json', 'utf8');
let words = JSON.parse(data);

words.users.push({id: 4, name: 'Sam'});
words.users.push({id: 5, name: 'Aragorn'});
console.log(words);

fs.writeFile('./Users.json', JSON.stringify(words), (err) => {
    if (err) throw err;
    console.log('The files are updated!');
});