import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";
import LoanRequest from "./pages/LoanRequest";
import Func404 from "./pages/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loan-request/:id" element={<LoanRequest />} />
        <Route path="*" element={<Func404 />} />
      </Routes>
    </Router>
  );
};

export default App;
