import React from "react";
import ReactDOM from "react-dom";
import { version } from "antd";
import "antd/dist/antd.css";
import "./asserts/index.css";

ReactDOM.render(
  <div className="App">
    <h1>antd version: {version}</h1>
    <p>
      Please <b>fork</b> this sandbox to reproduce your issue.
    </p>
  </div>,
  document.getElementById("root")
);