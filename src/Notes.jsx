import React, { useRef, useEffect, useState } from "react";
import "./Notes.css";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

function Notes({
  notes,
  edit,
  setEdit,
  editIndex,
  editnote,
  saveNote,
  deletenote,
  setTime,
  time,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (editIndex !== -1 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editIndex]);

  return (
    <div>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            {editIndex === index ? (
              <div>
                <input
                  ref={inputRef}
                  className="note-input"
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-success save-btn"
                  onClick={() => saveNote(index)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <div className="note-text">{note}</div>
                <button
                  type="button"
                  className="btn btn-secondary edit-btn"
                  onClick={() => {
                    editnote(index);
                    setEdit(note);
                  }}
                >
                  <FiEdit />
                </button>
                <button
                  type="button"
                  className="btn btn-danger delete-btn"
                  onClick={() => deletenote(index)}
                >
                  <MdDelete />
                </button>
                <br></br>

                <div>
                  <p style={{ fontSize: "12px" }}>{time[index]}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
