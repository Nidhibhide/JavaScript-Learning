var d=100;
function a() {
  //lexically inside GEC
  //so can access var of GEC + a()
  var b = 10;
  function c() {
    //lexically inside a()(a is parent)
    //so can access var of c() + a()
    console.log(b); //10
     console.log(d);//100
     //here find var d is known as scope chain 
  }
  console.log(d);//100
  c();
}

a();

// console.log(b); //ReferenceError: b is not defined

//child -> parent is allowed 
//parent -> child is not allowed 