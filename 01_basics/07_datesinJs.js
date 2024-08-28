// Dates in JavaScript

let myDate = new Date();
console.log(myDate); // 2024-08-28T10:06:05.648Z // current date and time
console.log(myDate.toString()); // Wed Aug 28 2024 15:37:01 GMT+0530 (India Standard Time) // current date and time in string format inida
console.log(myDate.toLocaleString()); // 28/8/2024, 3:38:02 pm
console.log(typeof myDate); // object // Interviewer asked me to check the type of myDate

let myCreatedDate = new Date(2024, 0, 28);
console.log(myCreatedDate); // 2024-01-28T00:00:00.000Z // date of creation of dare
console.log(myCreatedDate.toString()); // Wed Jan 28 2024 00:00:00 GMT+0530 (India Standard Time) // date of creation of dare in string format

let myCreatedDate2 = new Date(2023, 0, 28, 5, 4);
console.log(myCreatedDate2); // 2023-01-27T23:34:00.000Z // date of creation of dare
console.log(myCreatedDate2.toString()); // Sat Jan 28 2023 05:04:00 GMT+0530 (India Standard Time) // date of creation of dare in string format

let myCreatedDate3 = new Date("2023-01-28"); //yyyy-mm-dd
console.log(myCreatedDate3); // 2023-01-28T00:00:00.000Z // date of creation of dare
console.log(myCreatedDate3.toString()); // Sat Jan 28 2023 00:00:00 GMT+0530 (India Standard Time) // date of creation of dare in string format

console.log(
  "*************************************************************************"
);
console.log(Date.now()); // 1662731240000 // current time in milliseconds

let newDate = new Date();
console.log(newDate.getMonth() + 1); // current month
console.log(newDate.getDate()); // current day
console.log(newDate.getDay()); // current day of the week
console.log(newDate.getHours()); // current hour
console.log(newDate.getMinutes()); // current minute
console.log(newDate.getSeconds()); // current second

newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}); // current date in string format

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);
