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

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr\\layouts\\main.js";


var store = (0, _configureStore2.default)();

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement("div", { className: "maincont", "data-jsx": 739521376,
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
    styleId: 739521376,
    css: ".maincont[data-jsx=\"739521376\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:414px;height:768px;border:1px solid gray;background-color:whitesmoke}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR3NCLDBFQUNTLDhFQUNILDZGQUVQLFlBQ0MsYUFDUyxzQkFDTSw0QkFDOUIiLCJmaWxlIjoibGF5b3V0c1xcbWFpbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9hZ29vL0Rlc2t0b3Avd2RwcmFjL3RyY2tyIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSBcIi4uL2NvbmZpZ3VyZVN0b3JlXCI7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluY29udFwiPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+e2NoaWxkcmVufTwvUHJvdmlkZXI+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubWFpbmNvbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB3aWR0aDogNDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NjhweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuIl19 */\n/*@ sourceURL=layouts\\main.js */"
  }));
};