import moment from "moment";
export const addTodo = (text, fullDate = moment().format("YYMMDD")) => {
  return (dispatch, getState) => {
    const { date } = getState();
    dispatch({
      type: "ADD_TODO",
      id: Date.now(),
      category: "todo",
      fullDate,
      text
    });
  };
};

export const addEvent = (text, fullDate = moment().format("YYMMDD")) => {
  return (dispatch, getState) => {
    const { date } = getState();
    dispatch({
      type: "ADD_EVENT",
      id: Date.now(),
      category: "event",
      fullDate,
      text
    });
  };
};

export const addNote = (text, fullDate = moment().format("YYMMDD")) => {
  return (dispatch, getState) => {
    const { date } = getState();
    dispatch({
      type: "ADD_NOTE",
      id: Date.now(),
      category: "note",
      fullDate,
      text
    });
  };
};

export const toggleTodoStatus = (id, currentStatus) => {
  let status = "ongoing";
  switch (currentStatus) {
    case "ongoing":
      status = "completed";
      break;
    case "completed":
      status = "migrated";
      break;
    case "migrated":
      status = "scheduled";
      break;
    default:
      status = "ongoing";
  }
  return (dispatch, getState) =>
    dispatch({
      type: "TOGGLE_TODO_STATUS",
      id,
      status
    });
};

//Combined Action
export const showByDate = date => {
  return (dispatch, getState) =>
    dispatch({
      type: "SHOW_BY_DATE",
      date
    });
};
