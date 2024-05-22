import { useState } from "react";
import Home from './Pages/home';
import Accommodation from './Pages/accommodation';
import Near_here from './Pages/near_here';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accommodation" element={<Accommodation />}></Route>
        <Route path="/nearby_places_to_visit" element={<Near_here/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
