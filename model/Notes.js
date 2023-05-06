const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    image: String,
    email: String,
});

module.exports = mongoose.model("Notes", NotesSchema)