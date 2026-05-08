// From an array of employees, display names of employees:

// age < 30
// designation = "Developer"

const users = [
  { name: "A", age: 28, role: "Developer" },
  { name: "B", age: 31, role: "Developer" },
  { name: "C", age: 25, role: "Tester" },
];

const result = users
  .filter((item) => item.age < 30 && item.role == "Developer")
  .map((value) => value.name);

  console.log(result)
