import React from "react";
import App from "../App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
// it is configureStore
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

function Main() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

export default Main;
