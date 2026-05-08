// Get First User Above Age 25

const users = [
  { name: "A", age: 22 },
  { name: "B", age: 28 },
  { name: "C", age: 30 },
];

const res = users.find((item) => item.age > 25);
console.log(res);
