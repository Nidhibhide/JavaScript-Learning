// Reverse order of words.

const str = "hello world js";

const s1 = str.split(" ");
//split() converts string into array by breaking using seperator i.e space here

const res = s1.reverse();
//revser array

console.log(res.join(" "));
//join() is used to convert array into string by adding seperator betn them i.e space here
