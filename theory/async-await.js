//async - is keyword to use before function to make it async function.
//specially async function always return promise .
//if from async function instead of promise we are returning values i.e string , number , etc
async function getData() {
  return "Nidhi Bhide";
}
//then JS wrap value with promise and then return it

//async-await combo used to handle promises .

//await can only be used inside async function infront of promise.

//diff betn promise() vs async/await -
//1]async/await - if promise is still executing but next lines never will get print , it  wait to complete execution . i.e JS Engine was waiting for promise to resolved .

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p1 resolved value!!!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise p2 resolved value!!!");
  }, 5000);
});
async function handlePromise() {
    console.log("start");//it prints before it  
  const val = await p1;
  console.log("Hello World p1");
  console.log(val);

   const val2 = await p2;
  console.log("Hello World p2");
  console.log(val2);
}
handlePromise();

//2]promise - if promise is still executing but next lines will print , it never wait to complete execution .
//from 20 min in vdo
function getData() {
  p.then((res) => console.log(res));
  console.log("Hello World");
}

// getData();


//Examples - 
