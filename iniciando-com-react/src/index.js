import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Clock from "./Clock";
import Events from "./Events";

import store from "./store";
import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Clock />
    <Events /> */}
  </React.StrictMode>
);

reportWebVitals();
