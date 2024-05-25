import React from "react";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import { useParams,Link  } from "react-router-dom";
import CheckAvailability from "../components/checkAvailability";
import RoomViewer from "../components/RoomViewer";

const roomDetailsData = {
    single_room: {
      name: "SINGLE ROOM",
      description: "A comfortable room with basic amenities.",
      rooms: ["single_room_nm_01", "single_room_nm_02"],
    },
    double_room: {
      name: "DOUBLE ROOM",
      description: "A luxurious room with premium amenities.",
      rooms: ["double_room_nm_01", "double_room_nm_02"],
    },
    triple_room: {
      name: "TRIPLE ROOM",
      description: "A spacious room with multiple beds.",
      rooms: ["triple_room_nm_01", "triple_room_nm_02"],
    },
    family_room: {
      name: "FAMILY ROOM",
      description: "A spacious room with additional features.",
      rooms: ["family_room_nm_01", "family_room_nm_02"],
    },
  };

export default function room_list() {
  const { type } = useParams();
  const roomDetails = roomDetailsData[type];

  if (!roomDetails) {
    return <h2>Room type not found</h2>;
  }

  return (
    <div>
      <Nav />
      <div className="container text-center">
        <h3 className="mt-5 fw-bolder mb-5" style={{ color: "#05062d" }}>
          {roomDetails.name}
        </h3>
        <p className="mt-5 fw-semibold mb-5" style={{ color: "#05062d" }}>
          Our family rooms offer the perfect blend of comfort and convenience
          for your stay. Designed with families in mind, these spacious
          accommodations provide ample space for relaxation and bonding time.
          With cozy beds, modern amenities, our family rooms ensure a
          comfortable stay for all ages. Create lasting memories together in a
          warm and welcoming atmosphere, where every member of the family can
          feel at home.
        </p>
      </div>
      <CheckAvailability />
      <div className="mb-5">
      {roomDetails.rooms.map((roomId, index) => (
          <RoomViewer key={index} roomId={roomId} type={type} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
