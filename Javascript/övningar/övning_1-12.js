const users = [
  { name: "Anna", age: 25 },
  { name: "Karl", age: 16 },
  { name: "Sara", age: 18 },
  { name: "Erik", age: 15 },
];
const adults = users.filter((x) => x.age > 17);
console.log(adults);