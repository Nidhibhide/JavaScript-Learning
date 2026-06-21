//call,applpy and bind methods

const name = {
  firstname: "nidhi",
  lastname: "bhide",
  print: function (d) {
    console.log(this.firstname + " " + this.lastname + " " + d);
  },
};

console.log(name.print()); //nidhi bhide undefined

const name2 = {
  firstname: "John",
  lastname: "Dsouza",
  //   print: function () {
  //     console.log(this.firstname + " " + this.lastname);
  //   },//duplication of func
};

//call - we can do function borrowing
//we can borrow func from other object and use with data of some other object
//
name.print.call(name2, "patil"); //John Dsouza patil

//generally we keep reusable func outside object then we use 'call' like

let printFirstName = function () {
  console.log(this.firstname);
};

printFirstName.call(name); //nidhi
printFirstName.call(name2); //John

//apply - its same like call() but we just pass args in arrayList

function hometown(city, state, country) {
  console.log(`Hello i am ${this.firstname} from ${city},${state},${country}`);
}

hometown.apply(name, ["solapur", "MH", "IND"]); //Hello i am nidhi from solapur,MH,IND

function fav(food){
  console.log(`Hello , ${this.firstname} Your fav is ${food}`);
}


//bind() does not invoke immediately like apply , call it return new func with 'this' value which can be called later
const newFav=fav.bind(name,"Maggie");
newFav();//Hello , nidhi Your fav is Maggie