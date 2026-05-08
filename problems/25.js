// Convert lowercase → uppercase and vice versa.

const str = "HeLLo";
let res = "";

for (let i = 0; i < str.length; i++) {
  str[i] == str[i].toLowerCase()
    ? (res += str[i].toUpperCase())
    : (res += str[i].toLowerCase());
}
console.log(res);