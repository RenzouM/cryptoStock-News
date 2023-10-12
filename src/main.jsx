import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import Cotizaciones from "./Cotizaciones.jsx";
import Graficos from "./Graficos.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cotizaciones" element={<Cotizaciones />} />
        <Route path="/graficos" element={<Graficos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
