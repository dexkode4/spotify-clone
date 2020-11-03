import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataLayer } from "./context/dataLayer";
import { initialState, reducer } from "./context/reducer";

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>,
  document.getElementById("root")
);
