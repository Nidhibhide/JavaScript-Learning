//promise - It is object who holdes return of values of executed callback function

//Promie object are immutable in nature

//Promise is an object representing the eventual (in future ) completion or failure of an asynchronus operation.

//example -
const cart = ["maggie", "pizza", "momoes"];

//callback hell
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInSlip, function () {
      updateWalletBalance();
    });
  });
});

//promise with promise chaining
//use "return" when we use promise chaining with normal function

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInSlip) {
    return updateWalletBalance(paymentInSlip);
  });

//states of promises - pending , fulfilled , rejected

//when promise is rejected then catch() call func will be call

//if any then() after catch() it will be always called like finally 

//also we can add seperate catch() for seperate then()

//create custom promise 
//proomise chaining 