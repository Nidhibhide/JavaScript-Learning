// Count how many times each value appears.

const A = ["a", "b", "a", "c", "b", "a"];

const obj = {};
for (let i = 0; i < A.length; i++) {
  let key = A[i];
  obj[key] = (obj[key] || 0) + 1;
}
console.log(obj);
