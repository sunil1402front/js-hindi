const marvel_heroes = ["Iron Man", "Spider-Man", "Hulk", "Wolverine"];
const dc_heroes = ["Batman", "Superman", "Wonder Woman", "Flash"];
const concat_heroes = ["sunil", "prashant"];
const concat_heroes2 = ["merry", "christmas"];

marvel_heroes.push(dc_heroes);
console.log("push", marvel_heroes);

// [
//   "Iron Man",
//   "Spider-Man",
//   "Hulk",
//   "Wolverine",
//   ["Batman", "Superman", "Wonder Woman", "Flash"],
// ];

const all_heroes = concat_heroes.concat(concat_heroes2);
console.log("concat", all_heroes);

// concate and spread are same thing in this case

const all_new_heroes = [...concat_heroes, ...concat_heroes2];
console.log("spread", all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log("flat", real_another_array);

Array.isArray("Hitesh");
console.log("isArray", Array.isArray("Hitesh"));
console.log("from", Array.from("Hitesh"));
console.log("of", Array.of("Hitesh"));
console.log("from", Array.from({ name: "Hitesh" })); // intresting thing its not an array but an object with a name property so from will return an empty array , key will be not a accessible property in this case

let score1 = 100;
let score2 = 200;
let score3 = 300;

const stry = String(score1); // number to string
console.log("🚀 ~ stry:", typeof stry);

console.log("score1", Array.of(score1, score2, score3));
