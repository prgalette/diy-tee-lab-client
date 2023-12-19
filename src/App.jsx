import HomePage from "./pages/HomePage";
import ShirtDetailsPage from "./pages/ShirtDetailsPage";
import AboutPage from "./pages/AboutPage";
import OrdersPage from "./pages/OrdersPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import OrderDetails from "./pages/OrderDetails";

function App() {
  return (
    <>
      <NavBar />
      <br />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shirts/:shirtId" element={<ShirtDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path='/order-details/:orderId' element={<OrderDetails />} />
      </Routes>
    </>
  );
}

export default App;
