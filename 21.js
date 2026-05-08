// Reverse each word individually

const str = "hello world";

const arr = str.split(" ");

const res=arr.map((item) => item.split("").reverse().join(""));
console.log(res);
