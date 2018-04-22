// let got = "John Snow, Sansa Stark";
// let splitString = got.split(" ");
// console.log(`${splitString[2]} ${splitString[1]} ${splitString[0]} ${splitString[3]}`);


function mixPeople(a, b) {
      let  temp1 = a.split(' ');
      let  temp2 = b.split(' ');
    console.log(temp1[0],temp2[1]);
    console.log(temp2[0],temp1[1]);
}
console.log(mixPeople( "john Snow","Sansa Stark"));
