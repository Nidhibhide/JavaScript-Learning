// Sort Array of Objects by Name

const arr = [{ name: "John" }, { name: "Alice" }, { name: "Bob" }];
const res=arr.sort((a, b) => a.name.localeCompare(b.name));

console.log(res);

//a.name - b.name i.e '-' op works on Numbers only 
//localeCompare - used to compare 2 strings and tell which comes 1st in alphabetical order 
//-1 : before 
//1 : after 
//0 - both same


