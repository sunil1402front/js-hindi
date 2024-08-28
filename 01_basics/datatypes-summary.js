// # Primitive Data Types
// 7 types : String | Number | Boolean | Undefined | Null | Symbol | BigInt

const score = 100; // number // type of score : number
const isDone = true; // boolean // type of isDone : boolean
const name = "John"; // string // type of name : string
const age = undefined; // undefined // type of age : undefined
const id = null; // null  // null is complatly emtpy // type of id : object
const symbol = Symbol("id"); // symbol  // type of symbol : symbol
const anotherSymbol = Symbol("id"); // symbol // type of anotherSymbol : symbol
const bigInt = BigInt(100); // bigInt // type of bigInt : bigint

console.log(symbol === anotherSymbol); // false

// Refrence Type ( Non Primitive Data Type )
// Arrays , Objects , Functions

//Array : const heros = ["shaktiman", "rama", "arjun", "krishna"];
// Object : const hero = {name: "shaktiman", age: 100, isDone: true};

// also we are add in object like thats way
// let hero = {name: "shaktiman", age: 100, isDone: true};

// Function
const myFunction = function () {
  console.log("Hello World");
};

// documentation : // https://262.ecma-international.org/5.1/#sec-11.4.3
// screenshot : imp-screenshot/typeof-datatype.png