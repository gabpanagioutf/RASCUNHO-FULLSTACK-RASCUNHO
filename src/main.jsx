import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilmesProvider } from "./contexts/FilmesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilmesProvider>
      <App />
    </FilmesProvider>
  </React.StrictMode>
);