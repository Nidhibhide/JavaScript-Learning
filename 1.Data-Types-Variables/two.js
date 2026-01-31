let score = "22abc";

console.log(typeof score);

let convertToNumber = Number(score);

console.log(typeof convertToNumber); //Number
console.log(` value = ${convertToNumber}`); // NaN



//Conversions to Number 
//"33" => 33
//null => 0
//undefined => NaN
//true => 1 , false => 0
 
//Conversions to Boolean 
//"" => false
//"abc" => true