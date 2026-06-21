1.What is closure ?
-Closure = A function bundled together with its lexical environment.
-An inner function that captures variables from its outer function, even after the outer function finishes.
-JavaScript uses lexical scoping, meaning A function can access variables based on where it is defined in the code.
-uses = Data Hiding , callbacks, event listeners, setTimeout

2.What is hoisting ?
-Hoisting is a JavaScript mechanism where variable and function declarations are accessible before they are defined in the code.
-var is hoisted and initialized with undefined
-let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until initialization.
-Function declarations are fully hoisted.
-Function expressions and arrow functions are not fully hoisted.

3.what is TDZ ?
-TDZ (Temporal Dead Zone) is the time between when a variable is declared and when it is initialized in memory.
-Variables declared with let and const stay in the TDZ and cannot be accessed before initialization.
-If accessed before initialization, JavaScript throws a ReferenceError.
-TDZ prevents accessing a variable before initialization, helping avoid errors and bugs in the code.

4.what is lexical scope ?
-Lexical scope in JavaScript means a function can access variables based on its position in the code.
-Inner functions can access variables from their outer function and global scope.
-The scope is decided during code writing time, not during execution time.
-It controls variable access and is the base of closures in JavaScript.

5.What are Higher Order Functions?
-HOFs in JS are functions that take another function as argument or return a function.
-HOF's help in writing reusable,clean and modular code.
-Ex : map() , filter() , reduce() , etc
-Functions are treated as first-class citizens (JS treats functions like normal variables).

7.What is Deep Copy vs Shallow Copy?
-A shallow copy creates a new object but shares the same memory for any nested data, meaning changes to an inner object will affect both the original and the copy.
-A deep copy fully clones an object and all its nested data into a new memory location, ensuring that changes to the copy never affect the original.
-In JavaScript, you make a shallow copy using the spread operator (...) or Object.assign(), whereas a deep copy is made using JSON.parse(JSON.stringify()).

8.What is Event Loop?
-JavaScript is single-threaded, it delegates async tasks to browser Web APIs to prevent blocking the single-threaded Call Stack.
-Browser Web APIs handle tasks in the background and push completed callbacks into the Callback Queue.
-The Event Loop continuously monitors both the Call Stack and the Callback Queue.
-The moment the Call Stack becomes empty, the Event Loop pushes the waiting callback from the queue onto the stack for execution.

9.what is callback ?
-A callback is function passed to another function.
-It runs only when the main function finishes its work
-used in setTimeout() , map,forEach , etc
-Mainly used for asynchronous programming.
-callbacks can be synchronous or asynchronous depending on how they are executed .
ex-foreach() uses synchronous callback
setTimeout() and API calls use asynchronous callbacks.

10.asynchronous programming ?
-It allows long tasks like API calls and timers to run without blocking the main thread.
-JavaScript handles async operations using callbacks, Promises, async/await.
-JavaScript achieves async programming by delegating heavy tasks to browser Web APIs so it never blocks the main thread.
-The Event Loop pushes finished tasks back to the call stack once it is completely empty.
