//Function Statement & function declaration
function a() {
  console.log("Function Statement");
}
a(); //hoisting happens

//function expression
var b = function () {
  console.log("Function Expression");
};
b(); // happens but goes in TDZ i.e assign with undefined so got error TypeError:b is not a function

//Named Function Expression
var c = function xyz() {
  console.log("Named Function Expression ");
  console.log(xyz); //it prints xyz()
};
c(); //its prints
//xyz();//Error : ReferenceError: xyz is not defined

//First Class Function - function abiltiy to pass function as arg and return function , also known as High Order function
function f1(value) {
  return value;
}
const returnFunc = f1(function () {
  console.log("This is function arg");
});
returnFunc();

//toString(2) converts the number into base 2 (binary) representation.

//reduce()
//1.sum without reduce()
const arr = [5, 1, 3, 2, 6];
function FindSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(FindSum(arr));

//using reduce() - collect multiple values i.e array given out single value as result.
//consider , acc = sum
//curr=arr[i]
//0 = let sum = 0;

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output);

//find max value
function FindMaxValue(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return max;
}
console.log(FindMaxValue(arr));

//max value using reduce()
//consider , acc = mul
//curr=arr[i]
//0 = let max = 0;

const res = arr.reduce((max, curr) => {
  if (max < curr) max = curr;
  return max;
}, 0);

console.log(res);

const users = [
  {
    firstName: "Nidhi",
    lastName: "Bhide",
    age: 34,
  },
  {
    firstName: "Amit",
    lastName: "Patil",
    age: 26,
  },
  {
    firstName: "Sneha",
    lastName: "Kulkarni",
    age: 24,
  },
  {
    firstName: "Rahul",
    lastName: "Deshmukh",
    age: 29,
  },
  {
    firstName: "Priya",
    lastName: "Joshi",
    age: 26,
  },
];

//display list of full name of users
const result = users.map(function (user) {
  // return user.firstName + " " + user.lastName;
  return `${user.firstName} ${user.lastName}`;
});
console.log(result);
let value;

//how many users have acc(ans) = {24:2,26:2,29:1} use reduce
//2nd arg is initial value of accumulator
const newArray = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age] = acc[curr.age] + 1;
  }
  return acc;
}, {});

console.log(newArray);

//find out 1st name of all users whose age > 25 using filter
const que = users.filter((user) => user.age > 25).map((user) => user.firstName);

console.log(que);

//find out 1st name of all users whose age > 25 using reduce()

const que2 = users.reduce((acc, curr) => {
  if (curr.age > 25) acc.push(curr.firstName);
  return acc;
}, []);

console.log(que2);
