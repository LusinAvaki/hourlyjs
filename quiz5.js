class MyArray{
    constructor(){
        Object.keys(arguments).forEach((keyOfArgs) =>{
            this[keyOfArgs] = arguments[keyOfArgs];
            MyArray.prototype.length += 1;
        })
    }

    push(value) {
        this[this.length] = value;
        MyArray.prototype.length += 1;
    }

    pop(){
        delete this[this.length -1];
        MyArray.prototype.length -= 1;

    }

}
MyArray.prototype.length = 0;

let all = new MyArray('a', 'b', 'c');
all.push('d');
all.pop();

console.log(all.length);


// function adding() {
//     let contain = [];
//     for(let i= 0; i<this; i++){
//         contain.push(this + this);
//         return contain;
//     }
// }
// console.log(adding(1,2,4));

