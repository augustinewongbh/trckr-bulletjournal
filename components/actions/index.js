//todo actions

export const addTodo = (text, id) => {
  if (id) {
    return {
      type: "ADD_TODO",
      id: id,
      linkStatus: true,
      text
    };
  }

  return {
    type: "ADD_TODO",
    id: Date.now(),
    linkStatus: false,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

// Project Actions

export const addProjectTitle = title => {
  return {
    type: "ADD_PROJECT_TITLE",
    id: Date.now(),
    title
  };
};

export const addProjectDetails = (id, array) => {
  return {
    type: "ADD_PROJECT_DETAILS",
    id,
    array
  };
};

export const addProjectTask = (id, task) => {
  return {
    type: "ADD_PROJECT_TASK",
    id,
    task,
    task_id: Date.now()
  };
};

export const deleteProjectTask = (id, index) => {
  return {
    type: "DELETE_PROJECT_TASK",
    id,
    index
  };
};

export const updateProjectTaskStatus = (projId, id) => {
  return {
    type: "UPDATE_PROJECTTASK_STATUS",
    projId,
    id
  };
};

export const toggleProjectTodo = (taskId, projId) => {
  return {
    type: "TOGGLE_PROJECT_TODO",
    taskId,
    projId
  };
};

// Combined Actions

export const linktoTodo = (id, text, projId, linkStatus) => {
  return (dispatch, getState) => {
    //get the state of projects and todos here
    //const { todos, projects } = getState();

    !linkStatus && dispatch(addTodo(text, id));
    dispatch(updateProjectTaskStatus(projId, id));
  };
};

export const toggleBothTodo = (taskId, linkStatus) => {
  let projId = taskId.toString().match(/(\d+)?/);

  console.log(projId[0]);
  return (dispatch, getState) => {
    dispatch(toggleTodo(taskId));
    linkStatus && dispatch(toggleProjectTodo(taskId, parseInt(projId[0])));
  };
};
