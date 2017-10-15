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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import bothstates from "./bothstates";

var combinedReducers = (0, _redux.combineReducers)({
  //bothstates,
  todo: _todo2.default,
  events: _events2.default,
  notes: _notes2.default,
  date: _date2.default
});

exports.default = combinedReducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJlZHVjZXJzXFxjb21iaW5lZFJlZHVjZXJzLmpzIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsInRvZG8iLCJldmVudHMiLCJub3RlcyIsImRhdGUiLCJjb21iaW5lZFJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFTOztBQUNULEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7Ozs7O0FBRWpCOztBQUVBLElBQU07QUFFSjtBQUZ1QyxBQUd2QztBQUh1QyxBQUl2QztBQUp1QyxBQUt2QztBQUxGLEFBQXlCLEFBQWdCLEFBUXpDO0FBUnlDLEFBQ3ZDLENBRHVCOztrQkFRekIsQUFBZSIsImZpbGUiOiJjb21iaW5lZFJlZHVjZXJzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2Fnb28vRGVza3RvcC93ZHByYWMvdHJja3ItYnVsbGV0am91cm5hbCJ9