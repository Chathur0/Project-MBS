import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Home from './pages/Home'
import Pay from "./pages/pay";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Pay />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
