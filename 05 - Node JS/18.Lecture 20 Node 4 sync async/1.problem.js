 console.clear();
 // Code 1
 //  function makePizza(flavour) {
 //      return flavour + " Pizza ";
 //  }

 //  console.log(makePizza("Tikka"));

 // Code 2
 function makePizza(flavour) {
     setTimeout(function() {
         console.log("Preparing Pizza");
         return "Prepared" + flavour + "Pizza"

     }, 1000);
     return "Order Received " + flavour + " Pizza ";
 }

 console.log(makePizza("Tikka"));