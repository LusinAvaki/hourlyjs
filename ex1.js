function squareArea(height, width) {
    this.height = height;
    this.width = width;
    return height * width;
}
squareArea(5, 10);

function cubeArea() {
    return this.height * this.width * 6;
}
cubeArea();