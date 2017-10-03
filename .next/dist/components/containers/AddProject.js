"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr\\components\\containers\\AddProject.js";


var AddProject = function AddProject(_ref) {
  var dispatch = _ref.dispatch;

  var input = void 0;

  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_semanticUiReact.Form, {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      if (!input.value.trim()) return;
      dispatch((0, _actions.addProjectTitle)(input.value));
      input.value = "";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("input", {
    ref: function ref(node) {
      input = node;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement(_semanticUiReact.Button, { type: "submit", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "Add Project")));
};

AddProject = (0, _reactRedux.connect)()(AddProject);

exports.default = AddProject;