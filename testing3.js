let people = [
  { firstname: 'Jon', lastname: 'Snow', age: 18 },
  { firstname: 'Sansa', lastname: 'Stark', age: 20 },
  { firstname: 'Aria', lastname: 'Stark', age: 7 }
];

people.sort(function(a, b) {
  return a.age - b.age
})

console.log(people[0]);
