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
