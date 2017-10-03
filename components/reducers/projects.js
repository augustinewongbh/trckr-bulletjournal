const projects = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT_TITLE":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          description: "",
          tasks: []
        }
      ];
    case "ADD_PROJECT_DETAILS":
      return state.map(
        project =>
          project.id === action.id
            ? {
                ...project,
                description: action.array[0],
                tasks: action.array[1]
              }
            : project
      );

    case "ADD_PROJECT_TASK":
      return state.map(
        project =>
          project.id === action.id
            ? {
                ...project,
                tasks: [
                  ...project.tasks,
                  {
                    id: action.id + "_" + action.task_id,
                    text: action.task,
                    completed: false,
                    todoLink: false
                  }
                ]
              }
            : project
      );
    case "DELETE_PROJECT_TASK":
      return state.map(
        project =>
          project.id === action.id
            ? {
                ...project,
                tasks: [
                  ...project.tasks.slice(0, action.index),
                  ...project.tasks.slice(action.index + 1)
                ]
              }
            : project
      );

    case "TOGGLE_PROJECT_TODO":
      return state.map(
        project =>
          project.id === action.projId
            ? {
                ...project,
                tasks: project.tasks.map(
                  todo =>
                    todo.id === action.taskId
                      ? {
                          ...todo,
                          completed: !todo.completed
                        }
                      : todo
                )
              }
            : project
      );

    case "UPDATE_PROJECTTASK_STATUS":
      return state.map(
        project =>
          project.id === action.projId
            ? {
                ...project,
                tasks: project.tasks.map(
                  task =>
                    task.id === action.id
                      ? { ...task, todoLink: !task.todoLink }
                      : task
                )
              }
            : project
      );

    default:
      return state;
  }
};

export default projects;
