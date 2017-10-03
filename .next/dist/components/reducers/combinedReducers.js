"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _todos = require("./todos");

var _todos2 = _interopRequireDefault(_todos);

var _projects = require("./projects");

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import bothstates from "./bothstates";

var combinedReducers = (0, _redux.combineReducers)({
  //bothstates,
  todos: _todos2.default,
  projects: _projects2.default
});

exports.default = combinedReducers;