import { combineReducers } from "redux";
import todo from "./todo";
import events from "./events";
import notes from "./notes";
import date from "./date";
import time from "./time";
//import bothstates from "./bothstates";

const combinedReducers = combineReducers({
  //bothstates,
  todo,
  events,
  notes,
  time,
  date
});

export default combinedReducers;
