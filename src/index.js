import React from "react";
import ReactDom from "react-dom";
import reportWebVitals from "./reportWebVitals";

//files
import App from "./App";

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

reportWebVitals();
