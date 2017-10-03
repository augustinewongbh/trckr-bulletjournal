"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//todo actions

var addTodo = exports.addTodo = function addTodo(text, id) {
  if (id) {
    return {
      type: "ADD_TODO",
      id: id,
      linkStatus: true,
      text: text
    };
  }

  return {
    type: "ADD_TODO",
    id: Date.now(),
    linkStatus: false,
    text: text
  };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    id: id
  };
};

var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    id: id
  };
};

// Project Actions

var addProjectTitle = exports.addProjectTitle = function addProjectTitle(title) {
  return {
    type: "ADD_PROJECT_TITLE",
    id: Date.now(),
    title: title
  };
};

var addProjectDetails = exports.addProjectDetails = function addProjectDetails(id, array) {
  return {
    type: "ADD_PROJECT_DETAILS",
    id: id,
    array: array
  };
};

var addProjectTask = exports.addProjectTask = function addProjectTask(id, task) {
  return {
    type: "ADD_PROJECT_TASK",
    id: id,
    task: task,
    task_id: Date.now()
  };
};

var deleteProjectTask = exports.deleteProjectTask = function deleteProjectTask(id, index) {
  return {
    type: "DELETE_PROJECT_TASK",
    id: id,
    index: index
  };
};

var updateProjectTaskStatus = exports.updateProjectTaskStatus = function updateProjectTaskStatus(projId, id) {
  return {
    type: "UPDATE_PROJECTTASK_STATUS",
    projId: projId,
    id: id
  };
};

var toggleProjectTodo = exports.toggleProjectTodo = function toggleProjectTodo(taskId, projId) {
  return {
    type: "TOGGLE_PROJECT_TODO",
    taskId: taskId,
    projId: projId
  };
};

// Combined Actions

var linktoTodo = exports.linktoTodo = function linktoTodo(id, text, projId, linkStatus) {
  return function (dispatch, getState) {
    //get the state of projects and todos here
    //const { todos, projects } = getState();

    !linkStatus && dispatch(addTodo(text, id));
    dispatch(updateProjectTaskStatus(projId, id));
  };
};

var toggleBothTodo = exports.toggleBothTodo = function toggleBothTodo(taskId, linkStatus) {
  var projId = taskId.toString().match(/(\d+)?/);

  console.log(projId[0]);
  return function (dispatch, getState) {
    dispatch(toggleTodo(taskId));
    linkStatus && dispatch(toggleProjectTodo(taskId, parseInt(projId[0])));
  };
};