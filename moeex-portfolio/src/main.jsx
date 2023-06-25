/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Provider } from "react-redux";
import store from "./Layouts/Redux-Toolkit/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Provider store={store}>
  <App />
  </Provider>
    
  </>
);
