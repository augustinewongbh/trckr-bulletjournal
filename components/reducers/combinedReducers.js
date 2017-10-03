import { combineReducers } from "redux";
import todos from "./todos";
import projects from "./projects";
//import bothstates from "./bothstates";

const combinedReducers = combineReducers({
  //bothstates,
  todos,
  projects
});

export default combinedReducers;
