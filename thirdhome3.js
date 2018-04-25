function copyArray(arr) {
  let res = [];
  let i = 0;
  while (i < arr.length) {
    res.push(arr[i]);
    i++;
    }
    return res;
}

let array = [1,2,3,4,5];
let newArray = copyArray(array);

console.log(array)
console.log(newArray)

newArray.push(7)

console.log(array)
console.log(newArray)