import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Store from "./views/Store";
import Navbar from "./components/Navbar.tsx";
import ProductDetails from "./views/ProductDetails.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:title" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
