import React, { useState } from "react";
import Ai1 from "/accommodation-images/si.jpg";
import Ai2 from "/accommodation-images/do.jpg";
import Ai3 from "/accommodation-images/tr.jpg";
import Ai4 from "/accommodation-images/fa.jpg";
import iDelete from "/icons/delete.png";
import edit from "/icons/pencil.png";
import { Link } from "react-router-dom";

const allRooms = [
  { image: Ai1, roomNumber: "Room nm 01" },
  { image: Ai2, roomNumber: "Room nm 02" },
  { image: Ai3, roomNumber: "Room nm 03" },
  { image: Ai1, roomNumber: "Room nm 04" },
  { image: Ai2, roomNumber: "Room nm 05" },
  { image: Ai4, roomNumber: "Room nm 06" },
  { image: Ai2, roomNumber: "Room nm 07" },
  { image: Ai3, roomNumber: "Room nm 08" },
  { image: Ai1, roomNumber: "Room nm 09" },
  { image: Ai4, roomNumber: "Room nm 10" },
];

function AllRooms() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRooms = allRooms.filter((room) =>
    room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container text-center">
      <h2 style={{ color: "#05062d" }} className="mb-5">
        All Rooms
      </h2>
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            className="form-control w-100"
            placeholder="Search by Room Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((data, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <img
                    src={data.image}
                    alt=""
                    className="w-100"
                    style={{
                      height: "250px",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  />
                  <div
                    className="w-50 fw-bold rounded text-white position-relative"
                    style={{
                      backgroundColor: "#05062d",
                      top: "-240px",
                      left: "10px",
                    }}
                  >
                    {data.roomNumber}
                  </div>
                  <div
                    className="container d-flex justify-content-between position-relative"
                    style={{ top: "-80px" }}
                  >
                    <img src={iDelete} alt="" width={40} height={40} />
                    <Link to="/accommodation-admin/edit-room">
                      <img src={edit} alt="" width={40} height={40} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No rooms found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllRooms;
