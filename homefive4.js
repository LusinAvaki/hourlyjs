let fs = require('fs');

let data = fs.readFileSync('./Users.json', 'utf8');
let words = JSON.parse(data);

for (let i = 0; i < words.users.length; i++) {
    words.users[i].password = (i + 10).toString()
}
let objpass = JSON.stringify(words);
//console.log(words)

fs.writeFile('Passwords.json', objpass, (err) => {
    if (err) throw err;
    console.log('The file has been created!');
});