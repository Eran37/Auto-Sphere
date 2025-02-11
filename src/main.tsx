import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log("Starting application...");

try {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root element not found");
  }

  console.log("Root element found, rendering app...");

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  console.log("App rendered successfully!");
} catch (error) {
  console.error("Error rendering app:", error);
}
