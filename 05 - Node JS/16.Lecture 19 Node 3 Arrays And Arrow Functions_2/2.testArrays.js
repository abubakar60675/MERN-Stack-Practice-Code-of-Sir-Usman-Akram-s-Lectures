console.clear();
let students = ["Bakar", "Umar", "Ali"];
let searchedStudents = students.find(findAli);
console.log(searchedStudents);

function findAli(std) {
    if (std == "Ali")
        return true;
    else return false;
}