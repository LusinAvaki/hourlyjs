function squareArea(side) {
    return side * side;
}

function cubeArea(side) {
    return squareArea(side) * 6
}

console.log(squareArea(5));
console.log(cubeArea(5));
