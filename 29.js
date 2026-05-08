// Return key whose value is "admin".
const obj = { user1: "admin", user2: "guest" };

for (let key in obj) {
  if (obj[key] == "admin") console.log(key);
}

//in for...in loop i will get only keys not values directly
