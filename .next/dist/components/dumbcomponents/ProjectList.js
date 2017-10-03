"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Project = require("./Project");

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr\\components\\dumbcomponents\\ProjectList.js";


var ProjectList = function ProjectList(_ref) {
  var all = _ref.all,
      projects = _ref.projects,
      onEditClick = _ref.onEditClick,
      onDelete = _ref.onDelete,
      onLinkClick = _ref.onLinkClick;
  return _react2.default.createElement("ul", { style: { listStyle: "none" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, projects && projects.map(function (project, idx) {
    return _react2.default.createElement("li", { key: project.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react2.default.createElement(_Project2.default, {
      project: project,
      onEditClick: onEditClick,
      onDelete: onDelete,
      onLinkClick: onLinkClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }));
  }));
};

exports.default = ProjectList;