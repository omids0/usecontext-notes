import React, { useContext } from "react";
import notesContext from "../context/notesContext";

export default function Note({ note }) {
  const { dispatch } = useContext(notesContext);
  return (
    <div>
      <div key={note.title}>
        <p>{note.title}</p>
        <p>{note.body}</p>
        <button
          onClick={() => dispatch({ type: "REMOVE_NOTES", title: note.title })}
        >
          remove
        </button>
      </div>
    </div>
  );
}
