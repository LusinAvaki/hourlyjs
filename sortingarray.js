function bubblesortinng(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j=0; j < arr.length - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let a = arr[j];
                let b = arr[j + 1];
                arr[j] = b;
                arr[j + 1] = a;
            }
        }
    }
    return arr;
}

console.log(bubblesortinng([3, 5, 1, 4, 2, 8]));

