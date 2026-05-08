// Remove duplicate characters from string

const str="aabbcc";
const set=new Set(str);
console.log([...set].join(""));

//spread op  used to set -> array 
//join() and spread op used to set -> string