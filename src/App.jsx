import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import Notes from "./Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [time, setTime] = useState([]);

  const deletenote = (index) => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  const editnote = (index) => {
    setEdit(notes[index]);
    setEditIndex(index);
  };

  const addNote = () => {
    const now = new Date().toLocaleString();

    if (input.trim()) {
      setNotes([...notes, input]);
      setInput("");
      setTime([...time, now]);
    }
  };

  const saveNote = (index) => {
    if (edit.trim()) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = edit;
      setNotes(updatedNotes);
    }
    setEditIndex(null);
    setEdit("");
  };

  const clearNotes = () => {
    setNotes([]);
  };

  return (
    <div>
      <center>
        <div style={{ backgroundColor: "black" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <Heading />
          </div>
          <div
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <Input
              input={input}
              setInput={setInput}
              addNote={addNote}
              clearNotes={clearNotes}
            />
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <button
            type="button"
            className="btn btn-danger"
            style={{
              padding: "5px 5px",
              margin: "5px 5px",
              width: "120px",
              position: "fixed",
              bottom: "5px",
              left: "46%",
            }}
            onClick={clearNotes}
          >
            DELETE ALL
          </button>
          <Notes
            notes={notes}
            edit={edit}
            setEdit={setEdit}
            editIndex={editIndex}
            editnote={editnote}
            saveNote={saveNote}
            deletenote={deletenote}
            setTime={setTime}
            time={time}
          />
        </div>
      </center>
    </div>
  );
}

export default App;
