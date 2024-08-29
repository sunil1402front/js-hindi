// code run in terminal this command : node 02_basics/03_conversionOpration.js


let score = "30";
let scoreNumberAndString = "33abc";
let scoreNull = null;
let scoreUndefined = undefined;

console.log(typeof score);

let valueOfScoreInNumber = Number(score);
console.log(typeof valueOfScoreInNumber);
console.log(valueOfScoreInNumber);
//outpur : "30" => 30

let ValueOfScoreNumberAndString = Number(scoreNumberAndString); // its value type convert string to number
console.log(typeof ValueOfScoreNumberAndString); // its type is convert in Number
console.log(ValueOfScoreNumberAndString); // but 33abc is we know its a not a number but js is written NaN (Not a Number)
//outpur : "33abc" => NaN

let valueOfScoreInNull = Number(scoreNull); // its value null type convert object to number
console.log(typeof valueOfScoreInNull); // convert object to number
console.log(valueOfScoreInNull); // value is 0
//output : "null" => 0

let valueOfScoreInUndefined = Number(scoreUndefined); // its value undefined type convert object to number
console.log(typeof valueOfScoreInUndefined); // convert object to number
console.log(valueOfScoreInUndefined); // value is NaN
//output : "undefined" => NaN

// same as if true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

let number = 1402;
let stringNumber = String(number);
console.log(typeof stringNumber); // string
console.log(stringNumber); // "1402"

// ************************** Oprations ********************************

let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2);
//output : "Hello World"

let str3 = "Hello";
console.log(str3 + " " + str3);
//output : "Hello Hello"

let str4 = "Hello";
console.log(str4 + " " + str4 + " " + str4);
//output : "Hello Hello Hello"

console.log("1" + 2);
//output : "12"

console.log(1 + "2");
//output : "12"

console.log("1" + 2 + 1);
//output : "121"

console.log(1 + 2 + "2");
//output : "32"

console.log(true);
//output : "true"

console.log(+true);
//output : "1"

console.log(+"");
//output : "0"

// *******************************************************************************************************************************************************

// study Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x=${x} y=${y}`); // its a post increment method
//output : "x=4 y=3"

//  Explanation:
// let x = 3;
// This initializes x with the value 3.

// const y = x++;
// The x++ operation is a post-increment. This means that the current value of x (which is 3) is first assigned to y, and then x is incremented by 1.

// After this line, y will be 3 and x will be 4.
// console.log(x=${x} y=${y});
// This logs the values of x and y to the console.

// *******************************************************************************************************************************************************

// study Link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let xx = 3;
const yy = ++xx;

console.log(`x=${xx} y=${yy}`); // its a pre increment method
//output : "x=4 y=4"

// Explanation:
// let xx = 3;
// This initializes xx with the value 3.

// const yy = ++xx;
// The ++x operation is a pre-increment. This means that x is incremented by 1 before its value is assigned to y.

// After this line, x becomes 4, and y is assigned the value 4.
// console.log(x=${xx} y=${yy});
// This logs the values of xx and yy to the console.
