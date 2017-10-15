"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _combinedReducers = require("./components/reducers/combinedReducers");

var _combinedReducers2 = _interopRequireDefault(_combinedReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log("dispatching", action);
      var result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};

function configureStore(initialState) {
  return (0, _redux.createStore)(_combinedReducers2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, logger));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyZVN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJjb21iaW5lZFJlZHVjZXJzIiwibG9nZ2VyIiwiY29uc29sZSIsImxvZyIsImFjdGlvbiIsInJlc3VsdCIsIm5leHQiLCJzdG9yZSIsImdldFN0YXRlIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFTLEFBQVQsQUFBc0IsQUFBdEI7O0FBQ0EsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTZCLEFBQTdCOzs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7U0FBUyxnQkFBQTtXQUFRLGtCQUFVLEFBQ3hDO2NBQVEsQUFBUixJQUFZLEFBQVosZUFBMkIsQUFBM0IsQUFDQTtVQUFJLFNBQVMsS0FBSyxBQUFMLEFBQWIsQUFDQTtjQUFRLEFBQVIsSUFBWSxBQUFaLGNBQTBCLE1BQU0sQUFBTixBQUExQixBQUNBO2FBQU8sQUFBUCxBQUNEO0FBTHVCO0FBQVQ7QUFBZixBQU9BOztBQUFlLFNBQVMsQUFBVCxlQUF3QixBQUF4QixjQUFzQyxBQUNuRDtTQUFPLEFBQ0wsQUFESyxvREFFTCxBQUZLLGNBR0wsQUFBZ0IsQUFBaEIsa0RBQXVCLEFBQXZCLEFBSEssQUFBUCxBQUtEIiwiZmlsZSI6ImNvbmZpZ3VyZVN0b3JlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2Fnb28vRGVza3RvcC93ZHByYWMvdHJja3ItYnVsbGV0am91cm5hbCJ9