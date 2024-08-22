import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:4000/api/notes")
    .then((response) => {
      setNotes(response?.data?.data);
    })
  }, [])
  return (
    <div className="App">
      <h1>Notes</h1>
      {notes && notes.map((note, index) => <p key={index}>{note.title} {note.content}</p>)}
    </div>
  );
}

export default App;
