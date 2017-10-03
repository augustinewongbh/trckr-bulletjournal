import { connect } from "react-redux";
import { toggleTodo, toggleBothTodo, deleteTodo } from "../actions";
import TodoList from "../dumbcomponents/TodoList";

const getVisibleTodos = (todos, filter = "SHOW_ALL") => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id, linkStatus) => {
      dispatch(toggleBothTodo(id, linkStatus));
    },
    onDelete: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;