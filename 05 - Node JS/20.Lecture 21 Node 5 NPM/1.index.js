console.clear();
// Code 2
// const calculator = require("./Calculator");
// const { sum, subtract } = calculator; // Object Restructure.
// Code 2
const { sum, subtract } = require("./Calculator"); // Object Restructuring in place and this is how we do multiple Imports.

console.log("My Code is starting");
console.log(__dirname);
console.log(__filename);
console.log(sum(3, 6));
console.log(subtract(9, 6));