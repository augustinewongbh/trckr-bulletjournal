"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("../components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _reactRedux = require("react-redux");

var _configureStore = require("../configureStore");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _localStorage = require("../localStorage");

var _throttle = require("lodash/throttle");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr-bulletjournal\\layouts\\main.js";


var initialState = (0, _localStorage.loadState)();

var store = (0, _configureStore2.default)(initialState);

store.subscribe((0, _throttle2.default)(function () {
  var _store$getState = store.getState(),
      todo = _store$getState.todo,
      notes = _store$getState.notes,
      events = _store$getState.events,
      time = _store$getState.time;

  (0, _localStorage.saveState)({
    todo: todo,
    events: events,
    notes: notes,
    time: time
  });
}), 2500);

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    className: "jsx-1320960428" + " " + "maincont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: "1320960428",
    css: ".maincont.jsx-1320960428{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10%;width:414px;min-height:500px;border:1px solid gray;background-color:whitesmoke}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUdzQiwwRUFDUyw4RUFDSCw2RkFDSixlQUNILFlBQ0ssaUJBQ0ssc0JBQ00sNEJBQzlCIiwiZmlsZSI6ImxheW91dHNcXG1haW4uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWdvby9EZXNrdG9wL3dkcHJhYy90cmNrci1idWxsZXRqb3VybmFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSBcIi4uL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB7IGxvYWRTdGF0ZSwgc2F2ZVN0YXRlIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSBcImxvZGFzaC90aHJvdHRsZVwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gbG9hZFN0YXRlKCk7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5zdG9yZS5zdWJzY3JpYmUoXHJcbiAgdGhyb3R0bGUoKCkgPT4ge1xyXG4gICAgY29uc3QgeyB0b2RvLCBub3RlcywgZXZlbnRzLCB0aW1lIH0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xyXG4gICAgc2F2ZVN0YXRlKHtcclxuICAgICAgdG9kbyxcclxuICAgICAgZXZlbnRzLFxyXG4gICAgICBub3RlcyxcclxuICAgICAgdGltZVxyXG4gICAgfSk7XHJcbiAgfSksXHJcbiAgMjUwMFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpbmNvbnRcIj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntjaGlsZHJlbn08L1Byb3ZpZGVyPlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm1haW5jb250IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgd2lkdGg6IDQxNHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0= */\n/*@ sourceURL=layouts\\main.js */"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJQcm92aWRlciIsImNvbmZpZ3VyZVN0b3JlIiwibG9hZFN0YXRlIiwic2F2ZVN0YXRlIiwidGhyb3R0bGUiLCJpbml0aWFsU3RhdGUiLCJzdG9yZSIsInN1YnNjcmliZSIsImdldFN0YXRlIiwidG9kbyIsIm5vdGVzIiwiZXZlbnRzIiwidGltZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFXLEFBQWlCOztBQUNyQyxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGVBQU4sQUFBcUI7O0FBRXJCLElBQU0sUUFBUSw4QkFBZCxBQUFjLEFBQWU7O0FBRTdCLE1BQUEsQUFBTSxrQ0FDSyxZQUFNO3dCQUN5QixNQUR6QixBQUN5QixBQUFNO01BRC9CLEFBQ0wsdUJBREssQUFDTDtNQURLLEFBQ0Msd0JBREQsQUFDQztNQURELEFBQ1EseUJBRFIsQUFDUTtNQURSLEFBQ2dCLHVCQURoQixBQUNnQixBQUM3Qjs7O1VBQVUsQUFFUjtZQUZRLEFBR1I7V0FIUSxBQUlSO1VBSkYsQUFBVSxBQU1YO0FBTlcsQUFDUjtBQUpOLEFBQ0UsQ0FBQSxHQURGLEFBVUUsQUFHRjs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2hCLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMsc0NBQVMsT0FBVixBQUFpQjtnQkFBakI7a0JBQUEsQUFBeUI7QUFBekI7S0FGRixBQUVFO2FBRkY7U0FEYSxBQUNiO0FBQUE7QUFERiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2Fnb28vRGVza3RvcC93ZHByYWMvdHJja3ItYnVsbGV0am91cm5hbCJ9