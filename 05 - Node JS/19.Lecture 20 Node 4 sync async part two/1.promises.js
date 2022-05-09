console.clear();
/* 1 Pending
2 Resolving
3 Rejected*/
function makePizza(flavour) {
    return new Promise((resolve, reject) => {
        if (flavour == "Fajita") reject("Fajita is out of Stock");
        else
            setTimeout(function() {
                console.log("Preparing Pizza");
                resolve(flavour + "Pizza")
            }, 1000);
    });
}
makePizza("Fajita ").then(message => {
    console.log(message);
}).catch(message => {
    console.log(message);
});