import React, { useState } from 'react';
import '../Style/Style.css';

function NoteCreation(props) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleAddNote = () => {
    if (title && description) {
      const newNote = {
        title: title,
        description: description,
        image: image,
      };
      setNotes([...notes, newNote]);
      setTitle('');
      setDescription('');
      setImage('');
      props.createNotes(newNote);
    }
  };


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
  return (
    <div className="note-taking-app">
      <h1>Note Taking App</h1>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Select Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        {previewImage && (
          <img src={previewImage} alt="Preview" style={{ maxWidth: '100%' }} />
        )}
      </div>
      <button className="btn btn-primary" onClick={handleAddNote}>
        Add Note
      </button>
      <hr />
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          {note.image && <img src={note.image} alt={note.title} />}
        </div>
      ))}
    </div>
  );
}

export default NoteCreation;