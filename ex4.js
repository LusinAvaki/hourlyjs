let a = 5;
let b = 3;

// with temp
let temp = a;
a = b;
b = temp;

// without temp
a = a + b;
b = a - b;
a = a - b;

// es6
[a, b] = [b, a];

console.log(`a = ${a} b = ${b}`);
