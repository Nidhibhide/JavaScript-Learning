// Add New Property

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 15 },
  { name: "C", age: 25 },
];

const res = users
  .filter((item) => item.age >= 18)
  .map((element) => {
    element.isAdult = true;
    return element;
  });
console.log(res);
