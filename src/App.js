import React, { useEffect, useReducer } from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import NotesContext from "./context/notesContext";
import notesReducer from "./reducers/noteReducer";

export default function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes-usecontext"));
    dispatch({ type: "GET_NOTES", notes });
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-usecontext", JSON.stringify(notes));
    console.log(notes);
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <NotesForm />
      <NotesList />
    </NotesContext.Provider>
  );
}
