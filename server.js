const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
PORT = process.env.PORT || 3001
dotenv.config();

// connect Db

mongoose.connect('mongodb://127.0.0.1:27017/ProductDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    console.log("Connected to DB")
)
// mongoose.connect(
//     process.env.DB_CONNECT,
//     {
//         useUnifiedTopology: true,
//         useNewUrlParser: true
// },
//     console.log("Connected to DB")
// )

const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))
app.use("/api", productRoutes);

app.listen(PORT, () => {
    console.log("Server is started at", PORT);
})