function stringChanger(str) {
  let tempStr = str.toLowerCase();
  let strArray = tempStr.split('');
  let newStr = strArray[0]
  for (let i = 1; i < strArray.length; i++) {
    if (strArray[i] === strArray[0]) {
      newStr += '*';
    } else {
      newStr += strArray[i];
    }
  }
  return newStr;
}

console.log(stringChanger('calculator'));
