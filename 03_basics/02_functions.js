// code run in terminal this command : node 03_basics/02_functions.js

function calculateCartPrice(...number1) {
  // ... its a rest operator add the 3 values in one array
  return number1;
}
console.log(calculateCartPrice(10)); //10
console.log(calculateCartPrice(10, 20, 30)); // [10, 20, 30]

function calculateCartPrice2(value1, value2, ...number2) {
  return number2;
}

console.log(calculateCartPrice2(10, 20, 30, 40, 50)); // [30, 40, 50] // first value is value1:10 and second value is value2:20 and number2 is [30, 40, 50]
console.log(calculateCartPrice2(10, 20, 30, 40, 50, 60)); // [40, 50, 60] // same as here first or secound value is value1:10 and second value is value2:20 and number2 is [30,40, 50, 60]

console.log("---------------------------------------------");

const user = {
  username: "sunil",
  price: 1000,
};

function handleObject(anyObject) {
  return `username is ${anyObject.username} and price is ${anyObject.price}`;
}

console.log(handleObject(user)); //username is sunil and price is 1000

console.log("---------------------------------------------");

const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function returnSecoundValue(getarray) {
  return getarray[1];
}

console.log(returnSecoundValue(myNewArray)); //2
console.log(returnSecoundValue([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])); // 20

console.log("---------------------------------------------");