//objects 

//we can create object via 2 methods literals and contructor 
//when we create object using constructor then we can call it as singleton object .

//object literal
// const obj={
//     name:"Nidhi",
//     email:"nidhibhide@gmail.com",
//     age:24
// }

// console.log(obj.email);
// console.log(obj["email"]);

//object with symbol 
 const mySym=Symbol("rollno");//create unique key

 const obj={
    name:"Nidhi",
    email:"nidhibhide@gmail.com",
    age:24,
    [mySym] : 101
}
// console.log(obj[mySym])

obj.email="nidhibhide1424@gmail.com";
// console.log(obj);

// Object.freeze(obj); // use to lock or finalize object 
obj.email="nidhi@smaktech.com"
// console.log(obj);

//diff betn ()  and without () 
obj.display=function(){
    console.log(`My name is ${this.name}` );

}
// console.log(obj.display());
//in end undefined also display in console but why ?

// const user=new Object();//create object using constructor 

//merge 2 objects 
const obj1={1:'a',2:"b"}
const obj2={3:"a",4:"b"};

// const obj3={obj1,obj2};
// console.log(obj3); //output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign(obj1,obj2);
// console.log(obj3) // output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3={...obj1,...obj2};
console.log(obj3) //output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//get keys and values  of object in array 
 const user={
    name:"Nidhi",
    email:"nidhibhide@gmail.com",
    age:24,
};
console.log(Object.keys(user))
console.log(Object.values(user));

console.log(Object.entries(user));// get whole object in array form ( array of array form )

