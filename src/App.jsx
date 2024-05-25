import { useState } from "react";
import Home from './Pages/home';
import Accommodation from './Pages/accommodation';
import Near_here from './Pages/near_here';
import About_us from './Pages/about_us';
import Room_list from './Pages/room_list';
import RoomDetail from './Pages/room_detail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accommodation" element={<Accommodation />}></Route>
        <Route path="/nearby_places_to_visit" element={<Near_here/>}></Route>
        <Route path="/about_us" element={<About_us/>}></Route>
        <Route path="/accommodation/:type" element={<Room_list/>}></Route>
        <Route path="/accommodation/:type/:roomId" element={<RoomDetail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
