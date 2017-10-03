import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./components/reducers/combinedReducers";

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default function configureStore(initialState) {
  return createStore(
    combinedReducers,
    initialState,
    applyMiddleware(thunk, logger)
  );
}
