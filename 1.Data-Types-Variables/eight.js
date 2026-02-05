//const,var and let

//{ } - scope 

//function scope ia also called as global scope 
//block scope also called as local scope 
//There is diff scope in node env and browser engine ( inspect -> console tab ) ###

const roll_no = 100;
// roll_no=101;//assignment not allowed
console.log(`Roll No = ${roll_no}`);

//const also has block-scoped keyword


{
  let surname = "Bhide"; //only accesseble in these block ( Block scope )
}
// console.log(surname);//error

{
  var surname = "Bhide"; //Function Scope ( ignores {} )
}
// console.log(surname); //it prints

let x = 10;
// let x=20;//cannot redeclare in same scope (error)
// console.log(x);

var y=10;
var y=20;//redeclaration allowed in same scope
// console.log(y);

//MOSTLYY AVOID var 
//default value in JS is 'undefined'

age=24;
console.log(age);//use variable without any keyword is allowed in JS