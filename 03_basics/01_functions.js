// code run in terminal this command : node 03_basics/01_functions.js

function sayMyName() {
  console.log("H");
  console.log("e");
  console.log("l");
  console.log("l");
  console.log("i");
}

sayMyName();

function addTwoNumbers(numberA, numberB) {
  console.log(numberA + numberB);
}

addTwoNumbers(10, 20); //30
addTwoNumbers(10, "20"); //1020

console.log("---------------------------------------------");

function addTwoNumbers2(numberC, numberD) {
  let result = numberC + numberD;
  return result;

  //   also u can write like this
  // return numberC + numberD;
}

const result = addTwoNumbers2(10, 20); //30 // sane as add the result to a variable
console.log("Result of addTwoNumbers2(10, 20): " + result);

console.log("---------------------------------------------");

function loginUserMessage(username) {
  return `${username} logged in successfully`;
}

console.log(loginUserMessage("John")); //John logged in successfully
console.log(loginUserMessage()); // undefined logged in successfully // if u no pass the value at that time show undefined not null

console.log("---------------------------------------------");

function loginUserMessage2(username) {
  if (username === undefined) {
    return `Please enter a username`;
  }
  return `${username} logged in successfully`;

  //   u can write like this also
  //   if (!username) {
  //     return `Please enter a username`;
  //   }
}

console.log(loginUserMessage2("John")); //John logged in successfully
console.log(loginUserMessage2()); // Please enter a username
