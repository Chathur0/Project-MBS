import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AllAdmins from "./pages/AllAdmins";
import AddProduct from "./pages/AddProduct";
import ProductHome from "./pages/ProductHome";
import Product from "./pages/Product";
import Pay from "./pages/pay";
import Table from "./pages/ProductAdminTable";
import Edit from "./pages/productEdit";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import All_Products from "./pages/All_Products";
import Checkout from "./pages/Checkout"; // Import the Checkout component



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/all-admins" element={<AllAdmins/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/product-home" element={<ProductHome/>} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Product-Pay" element={<Pay />} />
        <Route path="/product-admin" element={<Table />} />
        <Route path="/edit/:name" element={<Edit />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/AllProducts" element={<All_Products />} />
        <Route path="/checkout" element={<Checkout />} /> {/* Add this route */}
     

      </Routes>
    </Router>
  );
}

export default App;
