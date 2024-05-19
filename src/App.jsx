import { useState } from "react";
import Home from './homePage/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
