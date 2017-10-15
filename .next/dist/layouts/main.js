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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr-bulletjournal\\layouts\\main.js";


var initialState = (0, _localStorage.loadState)();
var store = (0, _configureStore2.default)(initialState);

store.subscribe(function () {
  var _store$getState = store.getState(),
      todo = _store$getState.todo,
      notes = _store$getState.notes,
      events = _store$getState.events;

  (0, _localStorage.saveState)({
    todo: todo,
    events: events,
    notes: notes
  });
});

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    className: "jsx-2716199880" + " " + "maincont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), _react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: "2716199880",
    css: ".maincont.jsx-2716199880{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:414px;min-height:500px;border:1px solid gray;background-color:whitesmoke}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJnQixBQUdzQiwwRUFDUyw4RUFDSCw2RkFFUCxZQUNLLGlCQUNLLHNCQUNNLDRCQUM5QiIsImZpbGUiOiJsYXlvdXRzXFxtYWluLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2Fnb28vRGVza3RvcC93ZHByYWMvdHJja3ItYnVsbGV0am91cm5hbCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCIuLi9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgeyBsb2FkU3RhdGUsIHNhdmVTdGF0ZSB9IGZyb20gXCIuLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGxvYWRTdGF0ZSgpO1xyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5zdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gIGNvbnN0IHsgdG9kbywgbm90ZXMsIGV2ZW50cyB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcclxuICBzYXZlU3RhdGUoe1xyXG4gICAgdG9kbyxcclxuICAgIGV2ZW50cyxcclxuICAgIG5vdGVzXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibWFpbmNvbnRcIj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PntjaGlsZHJlbn08L1Byb3ZpZGVyPlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm1haW5jb250IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDQxNHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0= */\n/*@ sourceURL=layouts\\main.js */"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJQcm92aWRlciIsImNvbmZpZ3VyZVN0b3JlIiwibG9hZFN0YXRlIiwic2F2ZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwic3RvcmUiLCJzdWJzY3JpYmUiLCJnZXRTdGF0ZSIsInRvZG8iLCJub3RlcyIsImV2ZW50cyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUyxBQUFXLEFBQWlCOzs7Ozs7O0FBRXJDLElBQU0sZUFBTixBQUFxQjtBQUNyQixJQUFNLFFBQVEsOEJBQWQsQUFBYyxBQUFlOztBQUU3QixNQUFBLEFBQU0sVUFBVSxZQUFNO3dCQUNZLE1BRFosQUFDWSxBQUFNO01BRGxCLEFBQ1osdUJBRFksQUFDWjtNQURZLEFBQ04sd0JBRE0sQUFDTjtNQURNLEFBQ0MseUJBREQsQUFDQyxBQUNyQjs7O1VBQVUsQUFFUjtZQUZRLEFBR1I7V0FIRixBQUFVLEFBS1g7QUFMVyxBQUNSO0FBSEosQUFTQTs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2hCLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMsc0NBQVMsT0FBVixBQUFpQjtnQkFBakI7a0JBQUEsQUFBeUI7QUFBekI7S0FGRixBQUVFO2FBRkY7U0FEYSxBQUNiO0FBQUE7QUFERiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2Fnb28vRGVza3RvcC93ZHByYWMvdHJja3ItYnVsbGV0am91cm5hbCJ9