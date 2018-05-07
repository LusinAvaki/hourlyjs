let obj = {
    users: []
};
obj.users.push({id: 1, name: 'Bilbo'});
obj.users.push({id: 2, name: 'Frodo'});
obj.users.push({id: 3, name: 'Mrodo'});

console.log(obj)

let myJson = JSON.stringify(obj);

console.log(myJson)

let fs = require('fs');
fs.writeFile('Users.json', myJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});