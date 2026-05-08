// Check All Users Adult

const users = [{ age: 10 }, { age: 22 }, { age: 25 }];

const res=users.every((item) => item.age >= 18);
console.log(res);

