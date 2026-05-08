// Find Longest Word

const str = "I love programming";
const arr = str.split(" ");
let res = "";

for (let i = 0; i < arr.length; i++) {
  if (res.length < arr[i].length) res = arr[i];
}
console.log(res);
