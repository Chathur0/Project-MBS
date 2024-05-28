import { useState } from "react";
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

const initialRoomData = {
  roomNumber: "101",
  roomType: "double room",
  area: "500 sqft",
  capacity: { adult: 2, child: 1 },
  pricePerDay: 150,
  description: "Spacious room with a beautiful sea view.",
  headlines: [
    { value: "High-speed Wi-Fi", custom: false },
    { value: "Complimentary toiletries", custom: false },
  ],
  technology: [{ value: "Smart TV", custom: true }],
  service: [{ value: "Daily housekeeping", custom: false }],
  bath: [{ value: "Bathtub", custom: false }],
  bed: [{ value: "King-size bed", custom: false }],
  images: ["image1.jpg", "image2.jpg"],
  view: "Sea view",
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/accommodation" element={<Accommodation />}></Route>
        <Route path="/nearby_places_to_visit" element={<Near_here />}></Route>
        <Route path="/about_us" element={<About_us />}></Route>
        <Route path="/accommodation/:type" element={<Room_list />}></Route>
        <Route
          path="/accommodation/:type/:roomId"
          element={<RoomDetail />}
        ></Route>
        <Route path="/booking-process" element={<BookingProcess />}></Route>
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
          path="/accommodation-admin/edit-room"
          element={<Edit_room mode="edit" initialRoomData={initialRoomData} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
