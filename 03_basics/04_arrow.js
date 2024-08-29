// code run in terminal this command : node 03_basics/04_arrow.js

const user = {
  username: "sunil",
  password: "123456",

  welcomeMessage: function () {
    console.log(`Welcome ${this.username}`); // this is the current context
    console.log(this); // { username: 'sunil', password: '123456' }
  },
};

user.welcomeMessage(); // Welcome sunil
user.username = "John";
user.welcomeMessage(); // Welcome John

console.log(this); // {}

// in browser global object is window object // Interview Question

console.log("---------------------------------------------");

function chai() {
  let username = "sunil suthar";
  console.log(this.username); // undefined
  console.log(username); // sunil suthar
  console.log(this); // window
}
chai();

console.log("---------------------------------------------");

const chai2 = () => {
  let username1 = "sunil suthar";
  console.log(this);
};
chai2(); // {}

console.log("---------------------------------------------");

console.log("Basic Arrow Function");

const addTwoNumbers = (numberA, numberB) => {
  // arrow function
  console.log(numberA + numberB);
};

addTwoNumbers(10, 20); //30

console.log("---------------------------------------------");

const addTwoNumbers2 = (numberC, numberD) => numberC + numberD;
console.log(addTwoNumbers2(10, 20)); //30

console.log("---------------------------------------------");

const addObject = (obj1, obj2) => ({
  username: "obj1.username",
  password: "obj2.password",
});
console.log(addObject());

console.log("---------------------------------------------");

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// simple function
// myArray.forEach(function (value, index) {
//   console.log(value);
// });

//arrow function
myArray.forEach(() => {
  console.log(value);
});
