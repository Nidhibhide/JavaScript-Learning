//
let count = 0;
const getData = (value) => {
  console.log("count = " + count++);
    console.log("Value= " + value);
};

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this;//stored this coz setTimeout() runs later so we lose "this"
   let args = arguments;//
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);//args in array []
    }, delay);
  };
};
const betterFunction = doSomeMagic(getData, 3000);


//betterFunction will get call after keypress
betterFunction("Search Text");