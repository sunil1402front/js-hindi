// code run terminal command : node 03_basics/06_nullish_oprator.js

// ?? (nullish coalescing operator)

let val1;

val1 = 5 ?? 10;
console.log(val1); // output: 5

val1 = null ?? 10;
console.log(val1); // output: 10

val1 = undefined ?? 10;
console.log(val1); // output: 10

val1 = NaN ?? 10;
console.log(val1); // output: NaN
