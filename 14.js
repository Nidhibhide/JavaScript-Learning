// Merge and remove duplicates from two arrays

const A = [1, 2, 3];
const B = [2, 3, 4];
const C = [...A, ...B];
const unique = new Set(C);//remove duplicates
const res=[...unique];//convert set into array
console.log(res);
