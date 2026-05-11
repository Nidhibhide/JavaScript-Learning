//Hoisting
//Hoisting means we can access function & var before initialization .
arrowfunc();//arrowfunc is assigned with undefined in mem phase

func();
console.log(x); //undefined
var x = 7;
function func() {
  console.log("This is Hoisting example");
  return "nidhi";
}

func(); //it only runs function

console.log(func()); //it runs function and prints its return value i.e "Nidhi"

var arrowfunc = () => {
  console.log("This is arrow function");
};

//when arrow func with var , only variable is hoisted with undefined in memory phase and calling time excute undefined() its TypeError bcoz func called before initization.
