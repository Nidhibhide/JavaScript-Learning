//function currying

function multiplyLevel1(x, y) {
  console.log(x * y);
}

//using bind()
const multiplyLevel2 = multiplyLevel1.bind(this, 5); //x=5

console.log(multiplyLevel2(10)); //y=10,x=5
console.log(multiplyLevel2(20)); //y=20,x=5
//it func takes one arg at a time instead of taking all arg togther.

//using closure
function addOuterFunc(x) {
  function addInnerFunc(y) {
    console.log(x + y);
  }
  return addInnerFunc;
}

const closure = addOuterFunc(10);
console.log(closure(5)); //15
console.log(closure(10)); //20
