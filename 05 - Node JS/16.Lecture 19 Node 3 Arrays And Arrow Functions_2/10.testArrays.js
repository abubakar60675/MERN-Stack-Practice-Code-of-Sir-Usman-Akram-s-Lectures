console.clear();
let students = ["Bakar", "Umar", "Ali"];
students.splice(1, 1, ...["Zahid", "Anwar"])
students.sort(customSort);

function customSort(a, b) {
    if (b < a)
        return -1;
    else return 1;
}
console.log(...students);