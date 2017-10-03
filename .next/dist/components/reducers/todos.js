"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case "ADD_TODO":
      return [].concat((0, _toConsumableArray3.default)(state), [{
        id: action.id,
        text: action.text,
        completed: false,
        todoLink: action.linkStatus
      }]);
    case "TOGGLE_TODO":
      return state.map(function (todo) {
        return todo.id === action.id ? (0, _extends3.default)({}, todo, {
          completed: !todo.completed
        }) : todo;
      });

    case "DELETE_TODO":
      var removeId = state.map(function (todo) {
        return todo.id;
      }).indexOf(action.id);
      return [].concat((0, _toConsumableArray3.default)(state.slice(0, removeId)), (0, _toConsumableArray3.default)(state.slice(removeId + 1)));

    default:
      return state;
  }
};

exports.default = todos;