import { useState } from "react";
import Program from './Pages/program';
import Sermons from './Pages/sermons';
import Yoga from './Pages/yoga';
import Meditation from './Pages/medi';
import AddPreviousPrograms from './Pages/prevp';
import RegisterY from './Pages/R.yoga';
import UpcomingP from './Pages/upcomp';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/program" element={<Program />}></Route>
        <Route path="/meditation" element={<Meditation />}></Route>
        <Route path="/yoga" element={<Yoga />}></Route>
        <Route path="/sermons" element={<Sermons />}></Route>
        <Route path="prevp" element={<AddPreviousPrograms />}></Route>
        <Route path="/R.yoga" element={<RegisterY />}></Route>
        <Route path="/upcomp" element={<UpcomingP />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
