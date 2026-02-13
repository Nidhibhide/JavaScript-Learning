"use strict";
//1.strict mode , browser
//2.strict mode , node js
//3.non strict mode , browser
//4.non strict mode , node js

//this keyword
//1.this in global space
// console.log(this);

function xyz() {
  console.log(this);
}
xyz(); // prints undefined
//1] In strict mode and  browser , undefined prints
//2] In strict mode and  node js , {} prints
//3] In non strict mode and  browser , window object  prints
//4] In non strict mode and  node js , {} prints

//2.this substitution ???
//### IMP - If value of this keyword is undefined or null , then this keyword will be replaced with global object
// only in non strict mode ( i.e above code window obj print )

//3.this keyword value depends on how function is called ( tested in strict mode ).
// window.xyz(); // prints window object

//4.this inside a object's method
const obj = {
  a: 10,
  display: function () {
    console.log(this); //refer to whole ref of object
    console.log(this.a); //refer to specific key from ref of object
  },
};
obj.display();

//5.call , apply and bind methods
const student1 = {
  name: "Nidhi",
  display: function () {
    console.log(this.name);
  },
};

function func(surname, city, country) {
  console.log(
    `My Name  is ${this.name} and surname is ${surname} also city is ${city} and country is ${country}`,
  );
}
student1.display();

const student2 = {
  name: "Neha",
};
//1]call() is used to run a function and choose what this should point to.
student1.display.call(student2); //this of student1 replaced with student2
func.call(student1, "Bhide", "Solapur", "MH");
func.call(student2, "Patil", "Pune", "MH");

//2]diff between call() and apply() is we pass parameters in array here
func.apply(student1, ["Dsouza", "Mumbai", "MH"]);

//3]It's same like call() only it return new function so that we call it later
let newFunction = func.bind(student2, "Kapoor", "Satara", "MH");
// newFunction();

//6.this inside arrow function
//arrow func dont provide their own this so value of this is
//so value will get from lexical scope members.

const obj1 = {
  a: 10,
  b: function () {
    console.log(this);
  },
  c: () => {
    console.log(this);
  },
};

obj1.c(); //here display windows object as lexisppe as globL variable i.ex enclosing lexical context
obj1.b(); //display whole object

//7.this inside nested arrow function
const obj2 = {
  a: 30,
  b: function () {
    const c = () => {
      console.log(this);
    };
    c();
  },
};
obj2.b(); // prints whole object here arrow function accepts value of normal function which is parent of arrow func i.e lexical sscope

//arrow functions
//
const func1 = (name) => {
  console.log(`This is arrow function and my name is  ${name}`);
};
func1("Nidhi");

const x = {
  name: "Nidhi",
  role: "Full stack dev",
  exp: 5,
  show: function () {
    setTimeout(() => {
      console.log(this); //whole object
      console.log(
        `My name is ${this.name} and role is ${this.role} and exp is ${this.exp}`,
      );
    }, 2000); //here display whole object coz read point ' this inside arrow func ' on these page
    setTimeout(function () {
      console.log(this); //window object
      console.log(
        `My name is ${this.name} and role is ${this.role} and exp is ${this.exp}`,
      ); //display undefined
    }, 2000);
  },
};

// x.show();

//Callback Functions
//Is function will pass to another function and call afterwards when its call
//Example - setTimeout() function 

//Higher Order Functions => A function which takes another function as argument or return function from it 

function X(){
  console.log("This is Callback function X");
}
function Y(){
  X();
  console.log("This is Higher order function Y");
}
Y();


//Callback hell
//Callback Hell is a situation in JavaScript where multiple nested callbacks make the code difficult to read and maintain. 
//also called as pyramid of dom
