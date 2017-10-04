const notes = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.fullDate,
          category: "note"
        }
      ];

    case "DELETE_NOTE":
      let removeId = state.map(note => note.id).indexOf(action.id);
      return [...state.slice(0, removeId), ...state.slice(removeId + 1)];

    default:
      return state;
  }
};

export default notes;
