const accountId = 1402;
let accountEmail = "sunilsuthar@mailinator.com";
var accountPassword = "sunil123";
accountCity = "Jodhpur";
let accountState;

// accountId=2002 //not allowed
accountEmail = "sunil@mailinator.com";
accountPassword = "sunil12345";
accountCity = "Jaipur";

console.log(accountId);

/*
Prefer not to use var
because of issues in bloke scopr and functional scopr
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);


// this file code run commend : node 01_basics/01_variables.js