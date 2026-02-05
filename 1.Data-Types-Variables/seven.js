// date and time functions

//default unit of time is millisec

let myDate = new Date(); //get current date
// console.log(` Original  date = ${myDate}`);
// console.log(`Type of date = ${typeof myDate}`);//object
const result = myDate.toString();
// console.log(`ToString() = ${result}`);
// console.log(`Type of date = ${typeof result}`);//string

// console.log(`toDateString = ${myDate.toDateString()}`);
// console.log(`toLocaleString = ${myDate.toLocaleString()}`);

//create own date
let newDate = new Date(2002, 5, 14);
// console.log(newDate.toDateString());

let date2 = new Date("06-14-2002"); //in MM-DD-YYYY format
// console.log(date2.toLocaleString());

//Calculate diff betn 2 dates 
const start=new Date("2002-05-07");
const end=new Date("2002-05-14");
const diffInMs=end-start;
const ans=new Date(diffInMs);
console.log(ans/(1000*60*60*24));//get diff in days 




