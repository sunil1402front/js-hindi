// code run in terminal this command :  node 02_basics/05_destructure_objects.js

const course = {
  courseName: "JS In Hindi",
  price: 1000,
  courseInstructor: "Rahul",
};

const { courseInstructor } = course; // u can also rename the key like that const {courseInstructor: Instructor} = course; now u can use instructor as variable name
console.log(courseInstructor);

// Its a JSON Format Object

// {
//     'name': "Rahul",
//     'courseName': "JS In Hindi",
//     'price': "free",
// }

// Its a Array of Objects JSON Format

// [
//     {},
//     {}.
//     {}
// ]
