import React from "react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import { loadState, saveState } from "../localStorage";
import throttle from "lodash/throttle";

const initialState = loadState();

const store = configureStore(initialState);

store.subscribe(
  throttle(() => {
    const { todo, notes, events, time } = store.getState();
    saveState({
      todo,
      events,
      notes,
      time
    });
  }),
  2500
);

export default ({ children }) => (
  <div className="maincont">
    <Header />
    <Provider store={store}>{children}</Provider>

    <style jsx>{`
      .maincont {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10%;
        width: 414px;
        min-height: 500px;
        border: 1px solid gray;
        background-color: whitesmoke;
      }
    `}</style>
  </div>
);
