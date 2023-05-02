import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./theme/globalStyles.js";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={dark()}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
