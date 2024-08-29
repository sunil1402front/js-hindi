// code run in terminal this command : node 02_basics/03_objects.js

// singleton
// Object.create() // at that type also create a new object

// object literals
const JsUser = {}; // empty object

const JsUser2 = {
  name: "Hitesh", // key:value
  age: 25,
  location: "Delhi",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["yesterday", "today", "tomorrow"],
};

// both are same access that type object
console.log(JsUser2.name);
console.log(JsUser2["name"]); //bestest way to access

const mySym = Symbol("key1");

const JsUser3 = {
  name: "Hitesh Prasad", // key:value
  age: 25,
  location: "Jodhpur",
  email: "hiteshPrasad@google.com",
  isLoggedIn: false,
  lastLoginDays: ["yesterday", "today", "tomorrow"],
  mySym: "myKey1",
};

console.log(typeof JsUser3.mySym); // its a consider as a string

// when i access as a symbol at that time u can add the mySym like that [mySym]

const mySym2 = Symbol("key1");

const JsUser4 = {
  name: "Hitesh Prasad", // key:value
  age: 25,
  location: "Jodhpur",
  email: "hiteshPrasad@google.com",
  isLoggedIn: false,
  lastLoginDays: ["yesterday", "today", "tomorrow"],
  [mySym2]: "myKey1",
};
console.log(JsUser4);
console.log(JsUser4[mySym2]); // u can access like that symbol

JsUser4.greeting = function () {
  console.log("hello Js");
};
JsUser4.greetingTwo = function () {
  console.log(`hello Js again ${this.name}`);
};

console.log(JsUser4.greeting());
console.log(JsUser4.greetingTwo());
