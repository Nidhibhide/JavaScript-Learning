// Return only duplicate elements from array.

const arr = [1, 2, 3, 2, 4, 5, 1, 6];
const obj = {};
const ans = [];
for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  obj[value] = (obj[value] || 0) + 1;
}

for (key in obj) {
  if (obj[key] > 1) ans.push(key);
}
console.log(ans);
