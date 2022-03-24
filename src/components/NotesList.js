import React, { useContext } from "react";
import notesContext from "../context/notesContext";
import Note from "./Note";

export default function NotesList() {
  const { notes } = useContext(notesContext);

  return (
    <div>
      {notes.length <= 0 && <h3>List is Empty</h3>}
      {notes &&
        notes.map((note) => (
              <Note note={note} />
        ))}
    </div>
  );
}
