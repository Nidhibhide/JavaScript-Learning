// Capitalize first letter of each word

const str = "hello world";
const arr = str.split(" ");

const res = arr.map(
  (item) => item.charAt(0).toUpperCase() + item.slice(1, item.length),
);
//charAt take single char by index
//slice() extract part of string without change original
console.log(res.join(" "));
