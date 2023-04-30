const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: String,
    image: String,
    details: String,
    email: String,
});

module.exports = mongoose.model("Product", productSchema)