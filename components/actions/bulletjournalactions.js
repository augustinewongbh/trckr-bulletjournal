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

//Adjust time to show summary
export const adjustShowTime = () => {
  return {
    type: "ADJUST_SHOW_TIME"
  };
};

//Combined Action
export const showByDate = date => {
  return (dispatch, getState) =>
    dispatch({
      type: "SHOW_BY_DATE",
      date
    });
};

//End of Day summary actions to handle migrated and scheduled
export const endOfDayAction = () => {
  return (dispatch, getState) => {
    const { date } = getState();
    let nextDay = moment(date, "YYMMDD")
      .add(1, "days")
      .format("YYMMDD");
    let nextMonth = moment(date, "YYMMDD")
      .date(1)
      .add(1, "months")
      .format("YYMMDD");
    dispatch({
      type: "ENDOFDAY_ACTION",
      nextDay,
      nextMonth,
      date
    });
  };
};

//Change Time to show summary
export const changeTime = (minute, hour) => {
  return {
    type: "CHANGE_TIME",
    minute,
    hour
  };
};
