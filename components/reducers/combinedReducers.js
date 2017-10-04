import { combineReducers } from "redux";
import todo from "./todo";
import events from "./events";
import notes from "./notes";

//import bothstates from "./bothstates";

const combinedReducers = combineReducers({
  //bothstates,
  todo,
  events,
  notes
});

export default combinedReducers;
