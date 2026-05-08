// Remove User By Name

const users = [{ name: "Nidhi" }, { name: "John" }, { name: "Sam" }];

const result = users.filter((item) => item.name != "John");

console.log(result);
