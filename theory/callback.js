//callback function

//A function that takes another function as input or returns function known as HOF .

//The function that is passed into another function and used inside it known as callback func.

//callback gives power of async programmming .

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

//callback also can pass in event listeners

//problems of callback - callback hell , inversion of control 

//Callback Hell -
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
//createOrder() runs first
//After order created -> proceedToPayment() runs
//After payment done -> showOrderSummary() runs
//After summery -> updateWallet() runs
//Each step waits for previous callback func to finish
//Nested execution like this called as callback hell


//Inversion of control - Giving control of execution to another function 
//example - createOrder() controls when proceedToPayment() runs , not you 