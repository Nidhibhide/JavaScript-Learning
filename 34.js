// Swap keys and values.

const obj = { a: 1, b: 2, c: 3 };
const res = {};
let s1, s2;
for (key in obj) {
  s1 = key;
  s2 = obj[key];
  res[s2] = s1;
}
console.log(res);
