//functions

// console.log(3+null);//3

if (undefined) //it executes else block
{
  // console.log("This is block - 1 ");
} else {
  // console.log("This is block - 2");
}

const result = function () {
  // console.log("This is function example");
};
result();

function display(value1, value2, ...values) {
  //its rest op , values ele convert into array
  return values;
}
// console.log(display(100,200,300,400,500));

const user = {
  roll_no: 101,
  name: "Nidhi",
  age: 24,
  email: "nidhibhide@gmail.com",
};

function demo(obj) {
  // pass obj as parameter to function
//   console.log(`Name of user = ${obj.name} and Email ID = ${obj.email}`);
}
demo(user);

const nums = [1, 2, 3, 4, 5];
function demo1(arr) {
  console.log(`Last Element of Array = ${arr[arr.length - 1]}`);
}
demo1(nums);