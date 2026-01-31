//Comparisons of datatypes 

// console.log("1" > 2);//false 
//NOTE : "1" convert to Number 



console.log(null > 0); // false (0 > 0)
console.log(null == 0)// false  
console.log(null >= 0);//true  (0 >= 0 )


console.log(undefined > 0); // false 
console.log(undefined == 0)// false 
console.log(undefined >= 0);//false

//NOTE : When we use comparison op JS converts null to number but 
//equality op never converts

//NOTE : When we use comparison op JS converts undefined to NaN but 
//equality op never converts , NaN with 0 is false 

//AVOID ABOVE COMPARISONS 

//primitive 
// 7 types : String , Number , Boolean , null , undefined ,Symbol , BigInt

//Reference Type ( Non Primitive )
//Array , Objects , Functions 

const myfunc= function(){
    console.log("hello");
}
console.log(typeof myfunc)//function 

const arr=[1,2,3,4]
console.log(typeof arr)//object 


