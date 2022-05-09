console.clear();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { creatProduct, getAllProducts, deleteProduct, updateProduct } = require("./ProductOperations");
app.use(express.json());
mongoose.connect("mongodb://localhost/mernstack", { useNewUrlParser: true, useunifiedtopology: true })
    .then(async() => {
        console.log("Connection to MongoDB created");
        // let product = await creatProduct("Dell", 200, ["Funny", "Classy"]);
        // console.log(product);
        // let allProducts = await getAllProducts();
        // console.log(allProducts);
        // console.log(await deleteProduct("6226660b4f8d99013e00635c"));

        let updatedProduct = updateProduct("622614d9d05479f360010eae", "Lenovo Updated", 300, []);
        console.log(updatedProduct);
    })
    .catch((err) => {
        console.log("Error Connecting");
        console.log(err);
    })
app.listen(3001);