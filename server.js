const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
PORT = process.env.PORT || 3001
dotenv.config();

// connect Db

// mongoose.connect('mongodb://localhost:27017/', {
//     dbName: 'Login_signUp',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// },
//     console.log("Connected to DB")
// )
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    console.log("Connected to db")
)

// Import routes

const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api", productRoutes);

app.listen(PORT, () => {
    console.log("Server is started at", PORT);
})