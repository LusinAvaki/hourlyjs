let user = {
    name: "John",
    age: 30,

    sayHi() {
        return `Hi ${this.name}`;
    },
     sayHello() {
         return `Hi ${this.age}`;
    }
};
user.sayHi();
user.sayHello();

let functionNames = [];
Object.getOwnPropertyNames(user).forEach(function(property) {
    if(typeof user[property] === 'function') {
        functionNames.push(property);
    }});

console.log(functionNames);




