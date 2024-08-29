// code run in terminal this command : node 02_basics/05_string.js



const name = "SunilSuthar";
const repoCount = 100;

console.log(name + repoCount + "value"); // bad way to write
console.log(`${name} ${repoCount} value`); // good way to write // its call string interpolation

const gameName = new String("sunil");
const gameName2 = new String("sunil-suthar");

// its a prototype of string
gameName.toUpperCase(); // "SUNIL"

console.log(gameName[0]); // s
console.log(gameName.__proto__); // true // its a one kind of string object
console.log(gameName.length); // 5
console.log(gameName.charAt(2)); // n
console.log(gameName.indexOf("i")); //3

const newString = gameName2.substring(0, 4);
console.log(newString); // suni
newString.toUpperCase(); // "SUNI"

const anotherString = gameName2.slice(-11, 4); // total length of string is 11 i need -11 means its a consider from last index
console.log(anotherString); // uni

// note : substring is not consider from minus index for example like that const newString = gameName2.substring(-11, 4);

// trime is remove the space from start and end
const newStringOne = "    Sunil    ";
console.log(newStringOne); //    Sunil
console.log(newStringOne.trim()); // Sunil

const url = "https://hitesh.com/hitesh%20suthar";
url.replace("%20", "-");
console.log(url.replace("%20", "-")); // https://hitesh.com/hitesh-suthar
console.log(url.includes("sunil")); // false // its sunil keyword is not include in url that means print its a false

const gameName3 = "hitesh-suthar-sunil";
console.log(gameName3.split("-")); // ["hitesh", "suthar", "sunil"]

// notes its a very impoant thing to know about string
// please got threw thw link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
