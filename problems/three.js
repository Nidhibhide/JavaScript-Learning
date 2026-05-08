// Check Any User Age Below 18

const users = [
  { name: "A", age: 22 },
  { name: "B", age: 16 },
];

//some() checks if at least one item in array is true then return true otherwise false

const res = users.some((item) => item.age < 18);
console.log(res);

// includes() works only for primitive values i.e string,number,etc "these are compared by values not ref"
//use find/some
