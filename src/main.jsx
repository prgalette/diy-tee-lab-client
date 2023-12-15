import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";
import "./scss/styles.scss";
import * as bootstrap from "bootstrap";
import { ShirtProvider } from "./context/shirt.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ShirtProvider>
        <App />
      </ShirtProvider>
    </Router>
  </React.StrictMode>
);
