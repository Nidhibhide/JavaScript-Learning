//prototype
//It is object in js from which other objects , arrays and functions can inherit properties and methods .
//also used to create/add methods or properties

//__proto__
//used to access those methods or properties
//__proto__ is a reference

//#IMP - Everything (i.e string , function , array) in JavaScript behaves like an object, except primitive values.

//1]It is prototype chain of array
// arr  (your array instance)
//  |
//  | __proto__(ref)
//  v
// Array.prototype (Protytype Object) => from Array (Constructor)
//  |
//  | __proto__
//  v
// Object.prototype
//  |
//  | __proto__
//  v
// null

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
//same output
console.log(Array.prototype);
console.log(Array.prototype.length);
console.log(arr.__proto__);
//same output
console.log(Object.prototype);
console.log(arr.__proto__.__proto__);

console.log(arr.__proto__.__proto__.__proto__); //null at end

//2]It is prototype chain of string
// str  (string instance)
//  |
//  | __proto__ (ref)
//  v
// String.prototype  (Prototype Object)  => from String (Constructor)
//  |
//  | __proto__
//  v
// Object.prototype
//  |
//  | __proto__
//  v
// null

//3]It is prototype chain of function
// fn  (function instance)
//  |
//  | __proto__ (ref)
//  v
// Function.prototype  (Prototype Object)  => from Function (Constructor)
//  |
//  | __proto__
//  v
// Object.prototype
//  |
//  | __proto__
//  v
// null

//4]It is prototype chain of Object
// obj  (object instance)
//  |
//  | __proto__ (ref)
//  v
// Object.prototype  (Prototype Object)  => from Object (Constructor)
//  |
//  | __proto__
//  v
// null

//Example - Prototype  Inheritance
const obj1 = {
  name: "Nidhi",
};

const obj2 = {
  name: "John",
  age: 24,
};

obj2.__proto__ = obj1; // obj1 becomes the the prototype(parent) of obj2
//obj2 can access members from obj1+obj2
//obj1 can access members from obj1 itself
//diagramatic way
// obj2 (child)
//  |
//  | __proto__
//  v
// obj1  (parent)
//  |
//  v
// Object.prototype
//  |
//  v
// null
console.log(obj2.age); //24
console.log(obj2.name); //John
console.log(obj1.name); //Nidhi
console.log(obj1.age); //undefined

//Add custom method 
Function.prototype.mybind = function () {
  console.log("This is display method");
};

function func() {}

func.mybind(); //This is display method
func.__proto__.mybind();//This is display method
