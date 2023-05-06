const Product = require("../model/Product");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
}

// Single Product
const product_details = async (req, res) => {
    try {
        const query = { title: req.body.title };
        const product = await Product.findOne(query);
        res.json(product)
    } catch (error) {
        res.json({ message: error })
    }
}

// Add New product
const product_create = async (req, res) => {
    const product = new Product({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details,
        email: req.body.email
    });
    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Update Product
const product_update = async (req, res) => {
    const update = req.body;
    console.log(req);
    try {
        const product = {
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        };
        const updatedProduct = await Product.findByIdAndUpdate(
            { _id: req.params.productId },
            product,
            { new: true }
        );
        res.json(updatedProduct);
    } catch (error) {
        res.json({ message: error });
    }
}

// Delete Product
const product_delete = async (req, res) => {
    try {
        const removeProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(removeProduct);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    product_all,
    product_create,
    product_delete,
    product_details,
    product_update
}