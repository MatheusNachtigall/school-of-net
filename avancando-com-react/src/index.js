import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./weather.css";
import reportWebVitals from "./reportWebVitals";
import TodoListApp from "./container/TodoListApp";
import "bootstrap/dist/css/bootstrap.css";
import WeatherApp from "./container/WeatherApp";
import { ThemeProvider, createTheme } from "@mui/material";
import red from "@mui/material/colors/red";

const theme = createTheme({
  palette: {
    primary: red,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <TodoListApp />
      {/* <WeatherApp /> */}
    </React.StrictMode>
  </ThemeProvider>
);

reportWebVitals();
