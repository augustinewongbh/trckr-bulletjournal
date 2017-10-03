"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projects = function projects() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case "ADD_PROJECT_TITLE":
      return [].concat((0, _toConsumableArray3.default)(state), [{
        id: action.id,
        title: action.title,
        description: "",
        tasks: []
      }]);
    case "ADD_PROJECT_DETAILS":
      return state.map(function (project) {
        return project.id === action.id ? (0, _extends3.default)({}, project, {
          description: action.array[0],
          tasks: action.array[1]
        }) : project;
      });

    case "ADD_PROJECT_TASK":
      return state.map(function (project) {
        return project.id === action.id ? (0, _extends3.default)({}, project, {
          tasks: [].concat((0, _toConsumableArray3.default)(project.tasks), [{
            id: action.id + "_" + action.task_id,
            text: action.task,
            completed: false,
            todoLink: false
          }])
        }) : project;
      });
    case "DELETE_PROJECT_TASK":
      return state.map(function (project) {
        return project.id === action.id ? (0, _extends3.default)({}, project, {
          tasks: [].concat((0, _toConsumableArray3.default)(project.tasks.slice(0, action.index)), (0, _toConsumableArray3.default)(project.tasks.slice(action.index + 1)))
        }) : project;
      });

    case "TOGGLE_PROJECT_TODO":
      return state.map(function (project) {
        return project.id === action.projId ? (0, _extends3.default)({}, project, {
          tasks: project.tasks.map(function (todo) {
            return todo.id === action.taskId ? (0, _extends3.default)({}, todo, {
              completed: !todo.completed
            }) : todo;
          })
        }) : project;
      });

    case "UPDATE_PROJECTTASK_STATUS":
      return state.map(function (project) {
        return project.id === action.projId ? (0, _extends3.default)({}, project, {
          tasks: project.tasks.map(function (task) {
            return task.id === action.id ? (0, _extends3.default)({}, task, { todoLink: !task.todoLink }) : task;
          })
        }) : project;
      });

    default:
      return state;
  }
};

exports.default = projects;