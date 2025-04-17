// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Study from "./pages/Study";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/university" element={<Home />} />
        <Route path="/study" element={<Study />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
