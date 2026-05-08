// Remove age from all objects in array.

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];

const res = users.map((user) => {
  const { age, ...rest } = user;
  return rest;
});
console.log(res);
//The rest operator is used to collect “remaining values”
