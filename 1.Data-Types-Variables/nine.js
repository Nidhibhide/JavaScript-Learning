//Hoisting

//With var It allowed in JS
// getName1();
// console.log(x); //but prints undefined
var x = 7;
function getName1() {
  console.log("My Name is Nidhi ");
}

// //With let and const , calling before declaration ( with variable and functions ) It not allowed in JS
// getName2(); //error
// console.log(y); //error
let y = 7;
let getName2 = function () {
  console.log("My Name is Neha");
};

//Duplication In normal function this conditions allowed
function display() {
  console.log("This is Function - I Example ");
}
function display() {
  console.log("This is Function - II Example ");
}
// display();

//Duplication , In function Exp with 'var' only its allowed not with let and const
var display = function () {
  console.log("This is Function - I Example ");
};
var display = function () {
  console.log("This is Function - II Example ");
};
// display();

//How JS executes code and their steps to execute ( Global execution context )
//1.memory creation phase
//2.code execution phase

// | Type                 | Creation Phase       | Execution Before Declaration |
// | -------------------- | -------------------- | ---------------------------- |
// | var variable         | undefined            | Allowed                      |
// | let / const variable | TDZ                  | Error                        |
// | function declaration | Full function stored | Allowed                      |
// | function expression  | undefined            | Error                        |
// | arrow function       | TDZ                  | Error                        |

//## TEMPORAL DEAD ZONE
//let and const are hoisted like var but while memory creation phase var variables are stored in
//GLOBAL but let and const variables store in diff area called as Script but we cant access memory
//before initialization .
//Regarding let or const - from hoisting area till initialization known as Temporal dead zone
//So when we try to access variable inside temporal dead zone gives REFERENCE ERROR
//RULE TO AVOID TEMPORAL DEAD ZONE IS TO ALWAYS KEEP DECLARATION AND INITIALIZATION AT TOP

//#LEXICAL (Hierarchy or in sequence) SCOPE
//also known as scope chain

//Scope chain means JavaScript looks for a variable step by step—first in the current place,
//then outside, and keeps going until it finds it or reaches the global scope.

function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); //It prints
  }
}

// a();
// console.log(b);//Error

// #CLOSURE
//Function returns with lexical scope - When a function is returned from another function , it does not go alone
//It takes along the variables from places where it was created ( lexical scope )

function outer() {
  //lexcial scope
  let count = 11;

  function inner() {
    console.log(count);
  }

  return inner; // when it returns JS keeps count alive so inner still can use
}

const fn = outer();
fn(); //it prints 1
