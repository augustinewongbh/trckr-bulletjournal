"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require("react-redux");

var _ProjectList = require("../dumbcomponents/ProjectList");

var _ProjectList2 = _interopRequireDefault(_ProjectList);

var _actions = require("../actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    projects: state.projects,
    all: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onEditClick: function onEditClick(id, array) {
      dispatch((0, _actions.addProjectTask)(id, array));
    },
    onDelete: function onDelete(id, index) {
      dispatch((0, _actions.deleteProjectTask)(id, index));
    },

    onLinkClick: function onLinkClick(id, text, projId, linkStatus) {
      dispatch((0, _actions.linktoTodo)(id, text, projId, linkStatus));
    }
  };
};

var ProjectsList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProjectList2.default);

exports.default = ProjectsList;