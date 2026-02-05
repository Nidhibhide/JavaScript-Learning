//Array 
const arr1=[1,2,3,4,5,6];
// console.log(arr1);

const arr2=new Array("A","B","C","D");
// console.log(arr2);

const newArr=arr1.join(" | ");
// console.log(newArr); // convert array into string 

// console.log("----------------------Slice----------------------")

// console.log("Old array before operation " + arr1);
const ans=arr1.slice(1,3); // end index never include 
// console.log("Section of array " + ans);
// console.log("Old array after operation " + arr1);//never affect to original arr 

// console.log("----------------------Splice----------------------")

// console.log("Old array before operation " + arr1);
const ans1=arr1.splice(1,3); // end index  include 
// console.log("Section of array " + ans1);
// console.log("Old array after operation " + arr1);//can affect to original arr 


const firstNames=["Nidhi","Nishant","Ram"];
const LastNames=["Bhide","Doe","Patil"];
const letters=["A","B","C","D"];
const result = firstNames.concat(LastNames,letters);//using concat 
// console.log(result);
const result1=[...firstNames,...LastNames,...letters];//using spread op
// console.log(result1)

const another_array=[1,2,3,[4.5,6,[7,8,9,[10,11,12]],[13,14,15],[16,17,18]],[19,20,21]];
const real_another_array_1=another_array.flat();//just go 1 level down 
// console.log(real_another_array_1);
const real_another_array_2=another_array.flat(Infinity);//go all level down 
// console.log(real_another_array_2);

const obj={
    roll_no:1,
    name:"Nidhi",
    age:"24"
}

// console.log(Array.isArray(obj));//to check whether its array or not 
// console.log(Array.from(Object.values(obj)));//convert any type into array 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//convert set of elements into array 