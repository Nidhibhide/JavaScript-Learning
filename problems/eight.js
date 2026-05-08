// Calculate total age of all users.

const users = [{ age: 20 }, { age: 25 }, { age: 30 }];

const sum = users.reduce((prev, curr) => {
  return prev + curr.age;
}, 0);

console.log(sum);
