// example object
const Persons = [
  { name: "Person1", age: 40 },
  { name: "Person2", age: 33 },
  { name: "Person3", age: 68 },
  { name: "Person4", age: 18 },
  { name: "Person5", age: 28 },
  { name: "Person6", age: 6 },
];
// sort method small to big
Persons.sort((a, b) => {
  return a.age - b.age;
});
console.log(Persons);
