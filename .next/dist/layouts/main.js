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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr-bulletjournal\\layouts\\main.js";


var store = (0, _configureStore2.default)();

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", {
    className: "jsx-2716199880" + " " + "maincont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, children), _react2.default.createElement(_style2.default, {
    styleId: "2716199880",
    css: ".maincont.jsx-2716199880{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:414px;min-height:500px;border:1px solid gray;background-color:whitesmoke}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR3NCLDBFQUNTLDhFQUNILDZGQUVQLFlBQ0ssaUJBQ0ssc0JBQ00sNEJBQzlCIiwiZmlsZSI6ImxheW91dHNcXG1haW4uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvYWdvby9EZXNrdG9wL3dkcHJhYy90cmNrci1idWxsZXRqb3VybmFsIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSBcIi4uL2NvbmZpZ3VyZVN0b3JlXCI7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluY29udFwiPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+e2NoaWxkcmVufTwvUHJvdmlkZXI+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubWFpbmNvbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogNDE0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbiJdfQ== */\n/*@ sourceURL=layouts\\main.js */"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJQcm92aWRlciIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPLEFBQW9COzs7Ozs7Ozs7QUFFM0IsSUFBTSxRQUFOLEFBQWMsQUFFZDs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7eUJBQ2hCLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMsc0NBQVMsT0FBVixBQUFpQjtnQkFBakI7a0JBQUEsQUFBeUI7QUFBekI7S0FGRixBQUVFO2FBRkY7U0FEYSxBQUNiO0FBQUE7QUFERiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2Fnb28vRGVza3RvcC93ZHByYWMvdHJja3ItYnVsbGV0am91cm5hbCJ9