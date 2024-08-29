// code run in terminal this command : node 03_basics/05_iife.js

//Immediately Invoked Function Expression (IIFE)

(function chai() {
  //named IIFE
  console.log("DB CONNECTED");
})();

// global scop k poluation se problem hoti h kai bar to us global scope k jo variable declare hota h uske poluation ko hatane k liye iife use karte h

console.log("---------------------------------------------");

((name) => {
  //simple IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})("sunil suthar");
