const { reverseString } = require('./thirdhome5');


function isPol(str) {
    return str === reverseString(str)

}
console.log(isPol('bobob'));
