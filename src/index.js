import React from "react";
import ReactDOM from "react-dom/client";
// import { legacy_createStore } from "redux";
import "./index.css";
import App from "./components/App";

// const store = legacy_createStore;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
