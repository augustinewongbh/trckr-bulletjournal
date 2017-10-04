const eventdat = (state = [], action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.fullDate,
          category: "event"
        }
      ];

    case "DELETE_EVENT":
      let removeId = state.map(eventdat => eventdat.id).indexOf(action.id);
      return [...state.slice(0, removeId), ...state.slice(removeId + 1)];

    default:
      return state;
  }
};
// event has to sync with calendar?
export default eventdat;
