console.clear();
console.log("Reading File");
const fs = require("fs");
// let data = fs.readFileSync("3.mytextfile.txt", "utf8");
let data = fs.readFile("3.mytextfile.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("Read File");