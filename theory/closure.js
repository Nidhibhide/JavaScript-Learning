//closure  - function return + their surrounding env i.e lexial scope

function x1() {
  var a = 7;
  function y1() {
    console.log(a);
  }

  return y1;
}
var z1 = x1();
z1(); //7 coz y1() return with their lexical scope i.e a=7 which inside in x()

//example = 2
console.log("Below is Example - II ");

function x2() {
  var c = 7;
  function y2() {
    console.log(c);
  }
  c = 100;
  return y2;
}
var z = x2();
z(); //100 coz it updates value before function return  

//example = 3
console.log("Below is Example - III ");
function x3() {
  var b = 7;
  function y3() {
    console.log(b);
  }

  return y3;
  b = 100;//dead code 
}
var z3 = x3();
z3();//7 coz it never executes before it already return y3() so code is dead still present in lexical scope still no use


////Closure remembers variables from its scope, but their values change only if the code is executed.i.e example - 3 