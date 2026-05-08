// Remove falsy values from array

const data = [0, 1, false, 2, "", 3, null];
const res = data.filter((item) => Boolean(item));
//Boolean() convert into boolean values so it return which is true 
console.log(res);
