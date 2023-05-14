import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./weather.css";
import reportWebVitals from "./reportWebVitals";
import TodoListApp from "./container/TodoListApp";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./container/WeatherApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <TodoListApp /> */}
    <WeatherApp />
  </React.StrictMode>
);

reportWebVitals();
