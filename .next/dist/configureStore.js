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