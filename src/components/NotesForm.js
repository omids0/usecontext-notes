import React, { useState, useContext } from "react";
import notesContext from "../context/notesContext";

export default function NotesForm() {
  const { notes, dispatch } = useContext(notesContext);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  const saveNote = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title, body });
    settitle("");
    setbody("");
    localStorage.setItem("notes-usecontext", JSON.stringify(notes));
    console.log(notes);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <p>by useContext...</p>
      <form onSubmit={saveNote}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          placeholder="Body"
          value={body}
          onChange={(e) => setbody(e.target.value)}
        />
        <button>Save</button>
      </form>
    </div>
  );
}
