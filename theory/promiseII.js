//promise.all() - parallel api calls and get result and returns result in array .
//p1 takes - 3s , p2 takes 1s , p3 takes 2s
//total time take - 3s
//wait for all of them to get finish
//any of promise get rejected then all promises will get failed , it will not wait other promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P2 Failed"), 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 Success"), 1000);
});

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//promise.allSettled - for all sucess scenario its same like promise.all()
//but if any one gets failed then it will wait for all promises to get settled (completed ).
//so output will be if error occurs - [val1,err2,val3]

//settled (got the result )=> 
// 1]it can be resolve/success/fulfilled
//2]it can be reject/failure/rejected

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P4 Success"), 3000);
});

const p5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P5 Failed"), 2000);
});

const p6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P6 Success"), 1000);
});

Promise.allSettled([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//promise.race() -
//p1 takes - 3s , p2 takes 1s , p3 takes 2s
//after 1s (who is fast) it returned value of p2 (value2) "either is fails or success".
//if 1st promise was error , error will be thrown and return result of 1st settled promise.

const p7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P7 Success"), 3000);
});

const p8 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P8 Failed"), 2000);
});

const p9 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P9 Success"), 1000);
});

Promise.race([p7, p8, p9])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//promise.any() -
//It is very much similart to promise.race ()
//it will wait to 1st promise to get resolved then return that promise value only .
//if all promises get failed then return result will be "Aggregate Error" , ita array of [err1,err2,err3]


const p10 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P10 Success"), 3000);
    setTimeout(() => reject("P10 Failed"), 3000);
});

const p11 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P11 Success"), 2000);
  setTimeout(() => reject("P11 Failed"), 2000);
});

const p12= new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P12 Success"), 1000);
  setTimeout(() => reject("P12 Failed"), 1000);
});

Promise.any([p10, p11, p12])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    console.log(err.errors)//to display array of errors of promises
  });
