const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          todoLink: action.linkStatus
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed
              }
            : todo
      );

    case "DELETE_TODO":
      let removeId = state.map(todo => todo.id).indexOf(action.id);
      return [...state.slice(0, removeId), ...state.slice(removeId + 1)];

    default:
      return state;
  }
};

export default todos;
