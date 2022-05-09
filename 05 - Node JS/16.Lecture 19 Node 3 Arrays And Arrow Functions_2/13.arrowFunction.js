// Code 1
// function test(name) {
//     return name;
// }
// console.clear();
// console.log(test("Ali"));

// Code 2
// function test(name) {
//     return name;
// }
// const testa = name => name; // This is a function with an input name and there is not any braces and thsi is similar to above function
// console.clear();
// console.log(test("Ali"));

// // Code 3 
// function test(name) {
//     if (name == "Ali") return true; // This can also be written as name == "Ali" ? true: false;
//     else return false;
// }
// const testa = name => name; // This is a function with an input name and there is not any braces and thsi is similar to above function
// console.clear();
// console.log(testa("Ali"));

// Code 4 
function test(name) {
    // if (name == "Ali") return true; // This can also be written as name == "Ali" ? true: false;
    // else return false;
}
const testa = name => name == "Ali" ? true : false; // This is a function with an input name and there is not any braces and thsi is similar to above function
console.clear();
console.log(testa("Ali"));
console.log(5 == 6 ? "Wow" : "Hello");
console.log(6 == 6 ? "Wow" : "Hello");
console.log(5 < 6 && "This is Some Test");
console.log(5 > 6 && "This is Some Test");