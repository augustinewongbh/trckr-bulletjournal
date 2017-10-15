import { combineReducers } from "redux";
import todo from "./todo";
import events from "./events";
import notes from "./notes";
import date from "./date";

//import bothstates from "./bothstates";

const combinedReducers = combineReducers({
  //bothstates,
  todo,
  events,
  notes,
  date
});

export default combinedReducers;
