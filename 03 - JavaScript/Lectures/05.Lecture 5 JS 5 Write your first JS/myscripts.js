console.log("My first Js from an external file");
// js is a loosely typed language
var x = 5;
var y = 9;

console.log(x * y);
// this is how we write our functions in js
function sum(a, b) {
    return a + b;
}
console.log(sum(x, y));
// you can assign functions to variavles
var mysum = sum;
console.log(mysum);