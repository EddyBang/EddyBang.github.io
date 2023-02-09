import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyComponent from "./MyComponent";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
