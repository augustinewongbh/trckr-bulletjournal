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

var _date = require("./date");

var _date2 = _interopRequireDefault(_date);

var _time = require("./time");

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import bothstates from "./bothstates";

var combinedReducers = (0, _redux.combineReducers)({
  //bothstates,
  todo: _todo2.default,
  events: _events2.default,
  notes: _notes2.default,
  time: _time2.default,
  date: _date2.default
});

exports.default = combinedReducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJlZHVjZXJzXFxjb21iaW5lZFJlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJldmVudHMiLCJub3RlcyIsImRhdGUiLCJ0aW1lIiwiY29tYmluZWRSZWR1Y2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFVOzs7Ozs7QUFDakI7O0FBRUEsSUFBTTtBQUVKO0FBRnVDLEFBR3ZDO0FBSHVDLEFBSXZDO0FBSnVDLEFBS3ZDO0FBTHVDLEFBTXZDO0FBTkYsQUFBeUIsQUFBZ0IsQUFTekM7QUFUeUMsQUFDdkMsQ0FEdUI7O2tCQVN6QixBQUFlIiwiZmlsZSI6ImNvbWJpbmVkUmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWdvby9EZXNrdG9wL3dkcHJhYy90cmNrci1idWxsZXRqb3VybmFsIn0=