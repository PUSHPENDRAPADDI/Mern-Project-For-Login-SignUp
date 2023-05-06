const Notes = require("../model/Notes");
const UserDetails = require("../model/UserrDetails");

// Get All Notes
const notes_all = async (req, res) => {
    try {
        const query = { email: req.body.email };
        const notes = await Notes.find(query);
        res.json(notes);
    } catch (error) {
        res.json({ message: error });
    }
}

// Single Product
const note_details = async (req, res) => {
    try {
        const query = { _id: req.query.id };
        const note = await Notes.findOne(query);
        res.json(note)
    } catch (error) {
        res.json({ message: error })
    }
}

// Add New Notes
const notes_create = async (req, res) => {
    console.log(req);
    const notes = new Notes({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        email: req.body.email
    });
    try {
        const query = { email: req.body.email };
        const checkUser = await UserDetails.findOne(query)
        if (checkUser) {
            const savedNote = await notes.save();
            res.send(savedNote);
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