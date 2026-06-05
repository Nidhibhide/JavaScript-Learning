1.What is Prototype in JavaScript?
-Prototype in JavaScript is an object that contains predefined and custom properties/methods that can be shared and reused.
-Built-in types like Array, String, Function, and Date have their own prototypes, which provide methods such as map(), trim(), and bind().
-Since these types are ultimately based on Object, they can also access methods available on the Object prototype.

2.what is promise ?
-Promise is used to handle asynchronous operations such as API calls, database requests, or timers.
-Promise is an object representing the eventual (in future ) completion or failure of an asynchronus operation.
-Promie object are immutable in nature
-A Promise has 3 states: Pending, Fulfilled (success), and Rejected (failure).
-It avoids callback hell and uses .then(), .catch(), .finally(), and async/await for cleaner async code.

3.async-await?
-The async keyword makes a function return a Promise, and await pauses the execution until the Promise is resolved or rejected.
-It improves code readability and maintainability compared to .then() and callbacks.
-It is built on top of Promises, not a separate concept.
-Async functions always return a Promise, even if we return a normal value.

5.call(), .apply(), and .bind()
-call(), apply(), and bind() are used to explicitly set the value of "this" inside a function.
-They support function borrowing, allowing a function to be reused with different objects.

7.What is Prototype Inheritance in JavaScript?
-

prototype chain - 


8.What is Promise Chaining and how does it work?
-Promise Chaining executes multiple asynchronous operations sequentially using `.then()`, where each Promise passes its result to the next.
-It avoids callback nesting and makes asynchronous code cleaner, readable, and maintainable.
-If any Promise fails, the error is handled using a single `.catch()` at the end of the chain.

9.this ?

10.callback hell ?
-Callback Hell in JavaScript is a situation where callbacks are nested inside each other to handle asynchronous operations.
-It creates deeply nested and complex code structure, known as the “Pyramid of Doom.”
-It can be avoided using Promises and Async/Await.
-The code becomes difficult to read, understand, debug, test, and maintain.
