let peoplearr = [
    { firstname: 'Jon', lastname: 'Snow', age: 18 },
    { firstname: 'Sansa', lastname: 'Stark', age: 26 },
    { firstname: 'Gor', lastname: 'Gasparyan', age: 26 },
    { firstname: 'Aria', lastname: 'Stark', age: 7 },
    { firstname: 'Ankap', lastname: 'Ankapyan', age: 7 },
];

function groupingBy(people) {
  let out = {};
  for (let i = 0; i < people.length; i++){
    if(out.hasOwnProperty(people[i].age)){
      out[people[i].age].push(people[i])
    } else {
      out[people[i].age] = [people[i]]
    }
  }

  return out

}
console.log(groupingBy(peoplearr));
