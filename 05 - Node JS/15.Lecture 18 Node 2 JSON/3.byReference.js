let x = 10;
let y = x;
x = 20;
console.log(y);
console.log(x);
let user = { name: "Bakar", email: "bakar@gmail.com" };
let anotherUser = user; // will create a shallow copy
let anotherAnotherUser = Object.assign({}, user); // will create a deep copy
let user1 = {...user }; // will create a deep copy and this triple dots operator name is spread operator
user.name = "Ali";
console.log(anotherUser);
console.log(anotherAnotherUser);
console.log(user1);
//console.log(...user); // You can't do this