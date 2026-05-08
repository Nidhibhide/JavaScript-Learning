// Repeat Each Character Twice

const str = "abc";
let res = "";
for (let i = 0; i < str.length; i++) {
  res += "" + str[i] + "" + str[i];
}
console.log(res);
