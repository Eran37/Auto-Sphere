import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Starting application...");

const root = document.getElementById("root");
if (!root) {
  console.error("Root element not found!");
  throw new Error("Root element not found");
}

console.log("Root element found, rendering app...");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("App rendered!");
