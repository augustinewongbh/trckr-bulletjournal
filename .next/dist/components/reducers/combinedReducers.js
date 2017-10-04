"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _todo = require("./todo");

var _todo2 = _interopRequireDefault(_todo);

var _events = require("./events");

var _events2 = _interopRequireDefault(_events);

var _notes = require("./notes");

var _notes2 = _interopRequireDefault(_notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import bothstates from "./bothstates";

var combinedReducers = (0, _redux.combineReducers)({
  //bothstates,
  todo: _todo2.default,
  events: _events2.default,
  notes: _notes2.default
});

exports.default = combinedReducers;