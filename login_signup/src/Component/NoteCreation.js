import React, { useEffect, useState, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../Style/Style.css';
import microphone from '../Assests/microphone.png';
import write from '../Assests/pencil.png';

function NoteCreation(props) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [speechFlag, setSpeechFlag] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startLitening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  }

  useEffect(() => {
    if (Object.keys(props.Edit_note).length > 0) {
      setTitle(props.Edit_note.title);
      setDescription(props.Edit_note.description);
      setPreviewImage(`http://localhost:3001/${props.Edit_note.image}`);
    }

    if (speechFlag) {
      setDescription(...description, transcript)
      startLitening()
    } else {
      SpeechRecognition.stopListening()
    }

    return () => {
      props.resetEditData()
      setSpeechFlag(false)
    };
  }, [props.Edit_note, speechFlag, transcript])

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
    setImage(file)
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='bg-note'>
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
        <div className="form-group" style={{ border: "1px solid #efefef", borderRadius: "10px", padding: "5px" }}>
          <label htmlFor="image">Select Image : </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
          />
          {previewImage && (
            <img style={{ maxWidth: "200px", borderRadius: "10px" }} src={previewImage} alt="Preview" />
          )}
        </div>
        <p>Transcript : {transcript}</p>
        <button className="btn btn-primary" onClick={handleAddNote}>
          Add Note
        </button>
        <img
          style={{ margin: "5px" }}
          src={speechFlag ? write : microphone}
          alt='microphone'
          onClick={() => setSpeechFlag(!speechFlag)}
        />

        {/* <hr /> */}
        {/* {notes.map((note, index) => (
        <div key={index} className="note">
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          {note.image && <img style={{width: "200px"}} src={note.image} alt={note.title} />}
        </div>
      ))} */}
      </div>
    </div>
  );
}

export default NoteCreation;