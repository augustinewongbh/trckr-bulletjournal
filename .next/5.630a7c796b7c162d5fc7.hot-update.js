webpackHotUpdate(5,{

/***/ 1052:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(58);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(33);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(60);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(28);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(826);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\agoo\\Desktop\\wdprac\\trckr\\components\\dumbcomponents\\Project.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\agoo\\Desktop\\wdprac\\trckr\\components\\dumbcomponents\\Project.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42MzBhN2M3OTZiN2MxNjJkNWZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kdW1iY29tcG9uZW50cy9Qcm9qZWN0LmpzP2RkYmRjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBIZWFkZXIsIENoZWNrYm94IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5jbGFzcyBQcm9qZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcclxuICAgICAgaXNUb2dnbGVkOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlT3BlbiA9IHRoaXMuaGFuZGxlT3Blbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbG9zZSA9IHRoaXMuaGFuZGxlQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hlY2tDbGljayA9IHRoaXMuaGFuZGxlQ2hlY2tDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT3BlbihlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbW9kYWxPcGVuOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xvc2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGFsT3BlbjogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGVja0NsaWNrKHRleHQsIGlkLCBwcm9qSWQsIGxpbmtTdGF0dXMpIHtcclxuICAgIHRoaXMucHJvcHMub25MaW5rQ2xpY2soaWQsIHRleHQsIHByb2pJZCwgbGlua1N0YXR1cyk7XHJcbiAgICAvKnRoaXMuc2V0U3RhdGUoeyBpc1RvZ2dsZWQ6ICF0aGlzLnN0YXRlLmlzVG9nZ2xlZCB9KTtcclxuICAgIHRoaXMuc3RhdGUuaXNUb2dnbGVkXHJcbiAgICAgID8gdGhpcy5wcm9wcy5vbkxpbmtDbGljayhpZCwgdGV4dClcclxuICAgICAgOiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlzVG9nZ2xlZCk7Ki9cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB0ZW1wcHJvamVjdCA9IHRoaXMucHJvcHMucHJvamVjdDtcclxuICAgIGxldCBpbnB1dDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxNb2RhbCB0cmlnZ2VyPXs8aDE+e3RlbXBwcm9qZWN0LnRpdGxlfTwvaDE+fT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyPlxyXG4gICAgICAgICAgPGgxPnt0ZW1wcHJvamVjdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbC5Db250ZW50PlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7dGVtcHByb2plY3QudGFza3MubWFwKChkYXQsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2lkeH0+XHJcbiAgICAgICAgICAgICAgICA8aDRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogZGF0LmNvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0LnRleHR9XHJcbiAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uRGVsZXRlKHRlbXBwcm9qZWN0LmlkLCBpZHgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGVja0NsaWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wcHJvamVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdC50b2RvTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgaWYgKCFpbnB1dC52YWx1ZS50cmltKCkpIHJldHVybjtcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRWRpdENsaWNrKHRlbXBwcm9qZWN0LmlkLCBpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvTW9kYWwuQ29udGVudD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2R1bWJjb21wb25lbnRzL1Byb2plY3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUhBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUNBO0FBS0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBR0E7QUFBQTs7QUFGQTtBQUtBO0FBTEE7QUFDQTtBQU9BO0FBQUE7QUFEQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFGQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOztBQUFBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFFQTtBQUhBOztBQUFBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBTUE7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=