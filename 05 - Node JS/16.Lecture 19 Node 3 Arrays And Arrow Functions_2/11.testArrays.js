console.clear();
let students = ["Bakar", "Umar", "Ali"];
students.splice(1, 1, ...["Zahid", "Anwar"])
students.sort(customSort);

let rates = [2, 5, 10];
let newRates = rates.map(function(r) {
    return r * 2;
})

console.log(newRates);

function customSort(a, b) {
    if (b < a)
        return -1;
    else return 1;
}
console.log(...students);