{
  let a = 10;
  var b = 20;
}
console.log(b); //20
//console.log(a); //Error - ReferenceError: a is not defined

//let & const - block scope variable
//var - function or global scope

//shadowing
var x1 = 100;
  let b1 = 200;
  const c1 = 300;

{
  var x1 = 10;
  let b1 = 20;
  const c1 = 30;
  console.log(x1);//10
  console.log(b1);//20
  console.log(c1);//30
}
console.log(x1)//10 
  console.log(b1);//200
  console.log(c1);//300


//line 24 shows 10 coz var store in global scope so it overwrite value "100" of x1 

//line 25 & 26 shows 200 & 300 coz b1 and c1 stores diff as per scope 

//as known as shadowing

