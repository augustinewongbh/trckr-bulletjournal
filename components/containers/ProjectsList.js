import { connect } from "react-redux";
import ProjectList from "../dumbcomponents/ProjectList";
import { addProjectTask, deleteProjectTask, linktoTodo } from "../actions";
const mapStateToProps = state => {
  return {
    projects: state.projects,
    all: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEditClick: (id, array) => {
      dispatch(addProjectTask(id, array));
    },
    onDelete: (id, index) => {
      dispatch(deleteProjectTask(id, index));
    },

    onLinkClick: (id, text, projId, linkStatus) => {
      dispatch(linktoTodo(id, text, projId, linkStatus));
    }
  };
};

const ProjectsList = connect(mapStateToProps, mapDispatchToProps)(ProjectList);

export default ProjectsList;
