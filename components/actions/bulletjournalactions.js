export const addTodo = text => {
  const a = new Date();
  let fullDate = `${a.getFullYear()}${a.getMonth()}${a.getDate()}`;
  return (dispatch, getState) =>
    dispatch({
      type: "ADD_TODO",
      id: Date.now(),
      category: "todo", //do i need this? probably not
      fullDate,
      text
    });
};

export const addEvent = text => {
  const a = new Date();
  let fullDate = `${a.getFullYear()}${a.getMonth()}${a.getDate()}`;
  return (dispatch, getState) =>
    dispatch({
      type: "ADD_EVENT",
      id: Date.now(),
      category: "event",
      fullDate,
      text
    });
};

export const addNote = text => {
  const a = new Date();
  let fullDate = `${a.getFullYear()}${a.getMonth()}${a.getDate()}`;
  return (dispatch, getState) =>
    dispatch({
      type: "ADD_NOTE",
      id: Date.now(),
      category: "note",
      fullDate,
      text
    });
};

//Combined Action
