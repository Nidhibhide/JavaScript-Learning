// Sort Users By Age

const users = [
  { name: "A", age: 30 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];

const res = users.sort((a, b) => {
  return a.age - b.age;
});

console.log(res);
