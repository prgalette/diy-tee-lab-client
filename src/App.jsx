
import HomePage from "./pages/HomePage";
import ShirtDetailsPage from "./pages/ShirtDetailsPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";


function App() {
  return (
    <>
      <NavBar />
      <br />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shirts/details/:shirtId" element={<ShirtDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
