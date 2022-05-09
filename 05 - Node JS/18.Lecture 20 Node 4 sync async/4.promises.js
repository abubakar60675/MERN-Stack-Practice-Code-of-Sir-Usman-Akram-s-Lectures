console.clear();
/* 1 Pending
2 Resolving
3 Rejected*/
function makePizza(flavour) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Preparing Pizza");
            resolve(flavour + "Pizza")
        }, 1000);
    });
}
makePizza("Tikka ").then(message => {
    console.log(message);
});