import React from "react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import configureStore from "../configureStore";

const store = configureStore();

export default ({ children }) => (
  <div className="maincont">
    <Header />
    <Provider store={store}>{children}</Provider>

    <style jsx>{`
      .maincont {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 414px;
        height: 768px;
        border: 1px solid gray;
        background-color: whitesmoke;
      }
    `}</style>
  </div>
);
