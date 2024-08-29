// code run in terminal this command : node 02_basics/04_objects.js

//both are same for consider as a empty object
const tinderUser = new Object(); // non singleton object
const tinderUser2 = {}; // singleton object

tinderUser2.id = "123456789";
tinderUser2.name = "Hitesh";
tinderUser2.age = 25;
tinderUser2.isLoggedIn = false;

console.log(tinderUser2);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "Prasad",
    },
  },
};

console.log("firstname", regularUser.fullname.userfullname.firstname);
console.log("lastname", regularUser.fullname.userfullname.lastname);

const obj1 = {
  1: "one",
  2: "two",
};
const obj2 = {
  3: "three",
  4: "four",
};
const obj3 = { obj1, obj2 };
console.log(obj3);
// output
// {
//     obj1: { '1': 'one', '2': 'two' },
//     obj2: { '3': 'three', '4': 'four' }
//   }

const obj4 = Object.assign({}, obj1, obj2); //using assign method we are used to merge two objects properly
console.log(obj4); //{ '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

const obj5 = { ...obj1, ...obj2 }; //using spread operator we are used to merge two objects properly // its a best way to merge two objects
console.log(obj5); //{ '1': 'one', '2': 'two', '3': 'three', '4': 'four' }

const users = [
  {
    id: 1,
    email: "sunil@asdf.com",
  },
  { id: 2, email: "hitesh@asdf.com" },
  { id: 3, email: "prashant@asdf.com" },
  { id: 4, email: "sunil@asdf.com" },
];

console.log(users[1].email); //hitesh@asdf.com

console.log(tinderUser2); // { id: '123456789', name: 'Hitesh', age: 25, isLoggedIn: false }
console.log(Object.keys(tinderUser2)); // access the keys of object in tinderUser2 // get the keys in array // [ 'id', 'name', 'age', 'isLoggedIn' ]
console.log(Object.values(tinderUser2)); // access the values of object in tinderUser2  // get the values in array // [ '123456789', 'Hitesh', 25, false ]

// hasOwnProperty is a method of object // its a check the property is own property of tinderUser2 or not
console.log(tinderUser2.hasOwnProperty("id")); // true // we are check the property is tinderUser2 // if property is own property of tinderUser2 then return true else return false
// show property list in scrrenshot : imp-screenshot/object-property-list.png
