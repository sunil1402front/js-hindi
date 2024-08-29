// screenshot : imp-screenshot/memory-summary.png
// code run in terminal this command : node 02_basics/memory-summary.js


// Stack ( Primitive ) , Heap ( Non-Primitive )

let myYotubeName = "SunilSuthar@Youtube.com";
let anotherName = myYotubeName;

console.log(anotherName);

// Heap ( Non-Primitive )

let userOne = {
  name: "SunilSuthar",
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "hitesh@google.com";

console.log(userOne.email);
console.log(userTwo.email);

