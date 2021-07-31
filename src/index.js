import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
ReactDOM.render(
  <SpeechProvider appId="e3a75dc6-3854-405b-b5c0-e0e3f95a0072" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
