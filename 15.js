// Split array into subarrays of given size.

const A = [1, 2, 3, 4, 5];
const result = [];
let i,
  j = 2;

for (i = 0; i < A.length; i = i + j) {
  result.push(A.slice(i, i + j));
}
console.log(result);
