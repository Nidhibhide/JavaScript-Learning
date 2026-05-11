console.log(b); //hoisting happens with var "undefined"
console.log(a); //got error like  Cannot access 'a' before initialization

let a = 100;
var b = 20;

//above coz let & const stored in another zone not in global scope like var so getting error like above if we access it before initilization if we try to access it before declaration or initlization 

// "let" become accessible only after their declaration line executes, even if no value is assigned. i.e after line 4

//keyword       memory phase        acess before declaration
//1.var           undefined           yes
//2.let           uninitialized        TDZ
//3.const         uninitialized        TDZ

//before declaration or initalization or let & const i.e line 4 is TDZ

//let & const never attach with window object but it does with var 

