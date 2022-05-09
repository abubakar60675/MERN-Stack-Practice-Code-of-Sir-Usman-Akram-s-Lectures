console.clear();
const sum = require("./sum"); // This is how we import a single export.
const subtract = require("./subtract");
// const funcs = { sum: sum, subtract: subtract };
const funcs = { sum, subtract };
module.exports = funcs; // This is how we do multiple exports.
// console.log(sum);