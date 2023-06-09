const { json } = require("express");
const Notes = require("../model/Notes");
const UserDetails = require("../model/UserrDetails");

// Get All Notes
const notes_all = async (req, res) => {
    try {
        const query = { email: req.params.email };
        const notes = await Notes.find(query);
        res.status(200).json({ status: "SUCCESS", notes });
    } catch (error) {
        res.json({ message: error });
    }
}

// Single Product
const note_details = async (req, res) => {
    try {
        const query = { _id: req.query.id };
        const note = await Notes.findOne(query);
        res.status(200).json({ status: "SUCCESS" }, note)
    } catch (error) {
        res.json({ message: error })
    }
}

// Add New Notes
const notes_create = async (req, res) => {
    const notes = new Notes({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        image: req.file.path,
        email: req.body.email,
    });
    try {
        const query = { email: req.body.email };
        const checkUser = await UserDetails.findOne(query)
        const checkEdit = await Notes.findOne({ _id: req.body.idForfind })
        if (checkUser) {
            if (checkEdit) {
                await Notes.deleteOne({ _id: req.body.idForfind })
            }
            await notes.save();
            res.status(200).json({ status: "SUCCESS", message: "Notes is created successfuly" });
        } else {
            res.send("User Not Found")
        }
    } catch (error) {
        res.status(400).send(error);
    }
}

// Update Product
const notes_update = async (req, res) => {
    const { title, description, image } = req.body;
    const id = req.query.id;
    try {
        const updatedNote = await Notes.findByIdAndUpdate(
            id, // find the user to update by ID
            { title, description, image },// return the updated document instead of the original
            { new: true }
        );
        res.send(updatedNote)
    } catch (error) {
        res.json({ message: error, massage: "This is error" });
    }
}

// Delete Note
const note_delete = async (req, res) => {
    const id = req.query.id;
    try {
        const removeNote = await Notes.findByIdAndDelete(id);
        res.json(removeNote);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    notes_all,
    notes_create,
    note_details,
    notes_update,
    note_delete
}