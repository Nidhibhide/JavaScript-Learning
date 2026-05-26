function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000); //it stil remembers "i" from x() even after x() executed
  //closure is happening here
  //timeout runs at end after x() executed
  console.log("Good Morning"); //it runs 1st
}

// x();

function y() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000 * i);//closure 
  }
}
y();
//if we use "var i" then prints 6 6 6 6 6 coz its global scoped so there is only one shared i var so it get last value 6 after finishes loop 
//if we use "let i" then prints 1 2 3 4 5coz its block scoped new "i" create for every iteration 