function isEqual(arrA, arrB) {
    if (arrA.length !== arrB.length){
        return false;
    }
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] !== arrB[i]) return false;
    }
    return true;
}
let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 4, 5];
console.log(isEqual(a, b));