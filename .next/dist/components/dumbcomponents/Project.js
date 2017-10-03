"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Users\\agoo\\Desktop\\wdprac\\trckr\\components\\dumbcomponents\\Project.js";


var Project = function (_Component) {
  (0, _inherits3.default)(Project, _Component);

  function Project(props) {
    (0, _classCallCheck3.default)(this, Project);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Project.__proto__ || (0, _getPrototypeOf2.default)(Project)).call(this, props));

    _this.state = {
      modalOpen: false,
      isToggled: false
    };
    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleCheckClick = _this.handleCheckClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Project, [{
    key: "handleOpen",
    value: function handleOpen(e) {
      this.setState({ modalOpen: true });
    }
  }, {
    key: "handleClose",
    value: function handleClose(e) {
      this.setState({ modalOpen: false });
    }
  }, {
    key: "handleCheckClick",
    value: function handleCheckClick(text, id, projId, linkStatus) {
      this.props.onLinkClick(id, text, projId, linkStatus);
      /*this.setState({ isToggled: !this.state.isToggled });
      this.state.isToggled
        ? this.props.onLinkClick(id, text)
        : console.log(this.state.isToggled);*/
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tempproject = this.props.project;
      var input = void 0;
      return _react2.default.createElement(_semanticUiReact.Modal, { trigger: _react2.default.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, tempproject.title), __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, tempproject.title)), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, tempproject.tasks.map(function (dat, idx) {
        return _react2.default.createElement("li", { key: idx, __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement("h4", {
          style: {
            textDecoration: dat.completed ? "line-through" : "none"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, dat.text), _react2.default.createElement(_semanticUiReact.Button, {
          onClick: function onClick() {
            return _this2.props.onDelete(tempproject.id, idx);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, "Delete"), _react2.default.createElement(_semanticUiReact.Checkbox, {
          onClick: function onClick() {
            return _this2.handleCheckClick(dat.text, dat.id, tempproject.id, dat.todoLink);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }));
      })), _react2.default.createElement(_semanticUiReact.Form, {
        onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (!input.value.trim()) return;
          _this2.props.onEditClick(tempproject.id, input.value);
          input.value = "";
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement("input", {
        ref: function ref(node) {
          input = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: "submit", __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Submit")))));
    }
  }]);

  return Project;
}(_react.Component);

exports.default = Project;