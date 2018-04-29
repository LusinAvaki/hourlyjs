Array.prototype.removeItem = function(value){
    for(let i = 0; i < this.length; i++){
      if(this[i] === value){
        let indexToRemove = this.indexOf(value);
        this.splice(indexToRemove, 1);
      }
    }
    return this
}

let array = ['yes', 'du', 'na'];
console.log(array.removeItem('na'));
