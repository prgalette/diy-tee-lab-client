import { useState } from "react";
import HomePage from "./pages/HomePage";
import Page2 from "./pages/Page2";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <br />

      <Routes>
        <Route path="/page2" element={<Page2 />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
