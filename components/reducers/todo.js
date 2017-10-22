const todo = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: "ongoing", //can be ongoing,completed, migrated, scheduled
          date: action.fullDate,
          category: "todo"
        }
      ];
    case "TOGGLE_TODO_STATUS":
      return state.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                status: action.status
              }
            : todo
      );

    case "ENDOFDAY_ACTION":
      return state.map(todo => {
        if ((todo.date === action.date) & (todo.status === "migrated")) {
          return {
            ...todo,
            status: "ongoing",
            date: action.nextDay
          };
        } else if (
          (todo.date === action.date) &
          (todo.status === "scheduled")
        ) {
          return {
            ...todo,
            status: "ongoing",
            date: action.nextMonth
          };
        } else {
          return todo;
        }
      });

    case "DELETE_TODO":
      let removeId = state.map(todo => todo.id).indexOf(action.id);
      return [...state.slice(0, removeId), ...state.slice(removeId + 1)];

    default:
      return state;
  }
};

export default todo;
