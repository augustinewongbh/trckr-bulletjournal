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
    css: ".maincont[data-jsx=\"739521376\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:414px;height:768px;border:1px solid gray;background-color:whitesmoke}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWdCLEFBR3NCLDBFQUNTLDhFQUNILDZGQUVQLFlBQ0MsYUFDUyxzQkFDTSw0QkFDOUIiLCJmaWxlIjoibGF5b3V0c1xcbWFpbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9hZ29vL0Rlc2t0b3Avd2RwcmFjL3RyY2tyLWJ1bGxldGpvdXJuYWwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tIFwiLi4vY29uZmlndXJlU3RvcmVcIjtcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5jb250XCI+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT57Y2hpbGRyZW59PC9Qcm92aWRlcj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5tYWluY29udCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiA0MTRweDtcclxuICAgICAgICBoZWlnaHQ6IDc2OHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0= */\n/*@ sourceURL=layouts\\main.js */"
  }));
};