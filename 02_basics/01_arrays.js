// Read Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// code run in terminal this command : node 02_basics/01_arrays.js


// arrays

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myHero = [
  "Batman",
  "Superman",
  "Spiderman",
  "Wonder Woman",
  "Iron Man",
  "Hulk",
  "Captain America",
  "Thor",
  "Black Widow",
  "Hawkeye",
  "Wasp",
];
const myArray2 = new Array(10);

console.log(myArray[1]);
myArray.push(11);
myArray.push(12);
console.log(myArray); // [ 0, 1, 2, 3,  4,  5, 6, 7, 8, 9, 10, 11, 12 ]
myArray.pop(); // remove last element // [ 0, 1, 2, 3,  4,  5, 6, 7, 8, 9, 10, 11 ]
console.log(myArray);

console.log("***************************");

myArray.unshift(13);
console.log(myArray); // [ 13, 0, 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ] // 13 is added at the first index

myArray.shift(); // remove first element // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]
console.log(myArray);

console.log("***************************");

console.log(myArray.includes(1)); // true
console.log(myArray.includes(10)); // true
console.log(myArray.includes(11)); // false
console.log("***************************");

const myArray3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray3.indexOf(1)); // 1 // 1 is at index 1
console.log(myArray3.indexOf(10)); // 10 // 10 is at index 10
console.log(myArray3.indexOf(11)); // -1 // 11 is not in the array

console.log("***************************");

const newArray = myArray.join();
console.log(newArray); // 0,1,2,3,4,5,6,7,8,9,10,11
console.log(typeof newArray); // string

console.log("***************************");
// slice , splice

console.log("A:", myArray);

const mynumbers = myArray.slice(1, 5);
console.log(mynumbers);
console.log("B:", myArray);

const mynumbers2 = myArray.splice(1, 5);
console.log(mynumbers2);
console.log("C:", myArray);
