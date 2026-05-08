// You have an array of users. Display only names of users whose age is less than 24.



const users = [
  {
    name: "Nidhi",
    age: 20,
    salary: 25000,
  },
  {
    name: "John",
    age: 25,
    salary: 45000,
  },
  {
    name: "Peter",
    age: 34,
    salary: 65000,
  },
];

const result = users.filter((item) => item.age < 24).map((value) => value.name);

console.log(result);
