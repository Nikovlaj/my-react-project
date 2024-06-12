import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { ShopProvider } from "./components/Shopcontext";
import Productpage from "./components/Productpage";

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Productpage />} />
          </Routes>
        </Router>
      </ShopProvider>
    </div>
  );
}

export default App;
