// code run in terminal this command : node 02_basics/06_nums_and_math.js


const score = 100;
console.log(score); // 100

const balance = new Number(50);
console.log(balance); //[Number: 50]

console.log(balance.toString()); // 50
console.log(balance.toString().length); // 2
console.log(balance.toFixed(2)); // 50.00

const otherNumber = 23.8966;
const otherNumber2 = 123.8966;
console.log(otherNumber.toPrecision(3)); // 23.9
console.log(otherNumber2.toPrecision(3)); // 124

const hundreds = 1000000000;
console.log(hundreds.toLocaleString()); // 1,000,000,000
console.log(hundreds.toLocaleString("en-IN")); // 1,00,00,000,000

console.log(
  "*************************************************************************"
);

// Maths functions
console.log(Math); // this log write in google console log , u show all properties of Math

console.log(Math.abs(-5)); // 5
console.log(Math.round(7.6)); // 8 // most commonly used

console.log(Math.ceil(7.6)); // 8 // same as Math.round(7.6) , ceil means top value
console.log(Math.floor(7.6)); // 7 // same as Math.round(7.6) , flor means bottom value

console.log(Math.min(1, 2, 3, 4)); // 1
console.log(Math.max(1, 2, 3, 4)); // 4

console.log(Math.random()); // its a generated random number between 0 and 1
console.log(Math.random() * 10 + 1);

console.log(
  "*************************************************************************"
);

const min = 10;
const max = 20;
console.log(Math.random() * (max - min + 1)); // random number between 10 and 20 // 8.9848484884
console.log(Math.floor(Math.random() * (max - min + 1))); // random number between 10 and 20 // 9

