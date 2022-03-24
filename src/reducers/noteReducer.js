const notesReducer = (state, action) => {
  switch (action.type) {
    case "GET_NOTES":
      return action.notes;
    case "REMOVE_NOTES":
      return state.filter((note) => note.title !== action.title);
    case "ADD_NOTE":
      return [...state, { title: action.title, body: action.body }];
    default:
      return state;
  }
};

export default notesReducer;
