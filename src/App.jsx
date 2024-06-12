import Home from "./Pages/home";
import Accommodation from "./Pages/accommodation";
import Near_here from "./Pages/near_here";
import About_us from "./Pages/about_us";
import Room_list from "./Pages/room_list";
import RoomDetail from "./Pages/room_detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingProcess from "./Pages/booking_process";
import AccommodationAdmin from "./Pages/AccommodationAdmin";
import BookedRooms from "./components/BookedRooms";
import AddRoom from "./components/AddRoom";
import RoomRequest from "./components/RoomRequest";
import AllRooms from "./components/AllRooms";
import Edit_room from "./Pages/Edit_room";
import AllAdmins from "./Pages/AllAdmins";
import { useEffect } from "react";
import { BookingProvider } from "./context/BookingContext";

import Login from "./Pages/Login";
import Profile from "./Pages/Profile";


import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/accommodation" element={<Accommodation />}></Route>
          <Route path="/nearby_places_to_visit" element={<Near_here />}></Route>
          <Route path="/about_us" element={<About_us />}></Route>
          <Route path="/accommodation/:type" element={<Room_list />}></Route>
          <Route path="/all-admins" element={<AllAdmins />}></Route>
          <Route
            path="/accommodation/:type/:roomId"
            element={<RoomDetail />}
          ></Route>
          <Route
            path="/booking-process/:type/:id"
            element={<BookingProcess />}
          ></Route>
          <Route
            path="/accommodation-admin/booked-room"
            element={
              <AccommodationAdmin>
                <BookedRooms />
              </AccommodationAdmin>
            }
          />
          <Route
            path="/accommodation-admin/add-room"
            element={
              <AccommodationAdmin>
                <AddRoom />
              </AccommodationAdmin>
            }
          />
          <Route
            path="/accommodation-admin/room-request"
            element={
              <AccommodationAdmin>
                <RoomRequest />
              </AccommodationAdmin>
            }
          />
          <Route
            path="/accommodation-admin/all-rooms"
            element={
              <AccommodationAdmin>
                <AllRooms />
              </AccommodationAdmin>
            }
          />
          <Route
            path="/accommodation-admin/edit-room/:id"
            element={<Edit_room />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </BookingProvider>
  );
}

export default App;
