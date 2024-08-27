import { useEffect, useState } from "react";
import noteServices from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import Form from "./components/Form";
import List from "./components/List";
import Button from "./components/Button";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteServices
      .getAll()
      .then(inicialNotes => {
        console.log('promises fulfilled')
        setNotes(inicialNotes)})
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteServices
    .create(noteObject)
    .then(returnedNote => {      
      setNotes(notes.concat(returnedNote))      
      setNewNote('')
    })

  };

  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }

  const noteToShow = showAll ? notes : notes.filter(note => note.important === true)

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}
  
    noteServices
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <Button text='show' setShowAll={setShowAll} showAll={showAll} />
      <List noteToShow={noteToShow} toggleImportanceOf={toggleImportanceOf} />
      <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange} />
      <Footer />
    </div>
  );
};

export default App;
