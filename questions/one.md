1.What is closure ?
-Closure = A function bundled together with its lexical environment.
-An inner function that captures variables from its outer function, even after the outer function finishes.
-JavaScript uses lexical scoping, meaning variable access is based on where the function is written.
-uses = Data Hiding , callbacks, event listeners, setTimeout

2.What is hoisting ?
-Hoisting is a JavaScript mechanism where variable and function declarations are accessible before their actual declaration .
-var is hoisted and initialized with undefined
-let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until initialization.
-Function declarations are fully hoisted.
-Function expressions and arrow functions are not fully hoisted.

3.what is TDZ ?
-TDZ (Temporal Dead Zone) is the time between when a variable is declared and when it is initialized in memory.
-Variables declared with let and const stay in the TDZ and cannot be accessed before initialization.
-If accessed before declaration, JavaScript throws a ReferenceError.
-TDZ prevents accessing a variable before initialization, helping avoid errors and bugs in the code.

4.what is lexical scope ?
-Lexical scope in JavaScript means a function can access variables based on its position in the code.
-Inner functions can access variables from their outer function and global scope.
-The scope is decided during code writing time, not during execution time.
-It controls variable access and is the base of closures in JavaScript.

5.What are Higher Order Functions? 
-


6.What is Prototype in JavaScript?
-


7.What is Deep Copy vs Shallow Copy?


8.What is Event Loop?