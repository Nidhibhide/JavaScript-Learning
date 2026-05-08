// Find missing number between 1–5.
const arr = [1, 2, 4, 5];
let missing;
for (let i = 0; i <= 5; i++) {
  if (!arr.includes(i)) missing = i;
}
//includes() check whether ele is present or not
console.log(missing);
