import React, { useState, useEffect } from "react";
import Dp from "/nav&footer/profile.png";
import clean from "/icons/clean.png";
import axios from "axios";

function BookedRooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [bookedRoomsData, setBookedRoomsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/approved")
      .then((response) => {
        console.log(response.data);
        const fetchedData = response.data.map((item) => ({
          name: item.f_name,
          roomNumber: `${
            item.type.charAt(0).toUpperCase() + item.type.slice(1)
          } nm ${item.r_name}`,
          contactNumber: item.m_number,
          checkIn: new Date(item.check_in).toISOString().split("T")[0],
          checkOut: new Date(item.check_out).toISOString().split("T")[0],
          package: item.package,
          email: item.email,
          status: item.status,
          id: item.b_id,
          slip: item.b_slip,
        }));
        setBookedRoomsData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const filteredRooms = bookedRoomsData.filter(
    (room) =>
      (room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.contactNumber.includes(searchQuery)) &&
      (statusFilter === "" || room.status === statusFilter)
  );
  
  const handleCleanRoom = (id, slip) => {
    if (window.confirm("Are you sure you want to clean this room?")) {
      axios
        .delete(`http://localhost:3000/api/bookings/${id}`)
        .then((response) => {
          console.log(response.data);
          setBookedRoomsData((prevData) =>
            prevData.filter((room) => room.id !== id)
          );
          axios
            .delete(`http://localhost:3000/api/delete-slip/${slip}`)
            .then((response) => {
              console.log(response.data);
            })
            .catch((error) => {
              console.error("Error deleting slip: ", error);
            });
        })
        .catch((error) => {
          console.error("Error cleaning room: ", error);
        });
    }
  };
  return (
    <div className="text-center">
      <h2 style={{ color: "#05062d" }}>All Booked Rooms</h2>
      <div className="form-group d-flex gap-3 container my-5">
        <div className="row bg-light p-3 rounded-3 border w-100">
          <div className="col-12 col-sm-6 mb-2">
            <input
              type="text"
              className="form-control w-100"
              placeholder="Search by User Name or Mobile Number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-12 col-sm-6">
            <select
              className="form-select w-100"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">Filter by Status</option>
              <option value="guest">Guest</option>
              <option value="visited">Visited</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="mt-3 table table-hover border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Room Number</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Package</th>
              <th>Status</th>
              <th>Clean Room</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <tr key={index}>
                  <td>{room.name}</td>
                  <td>{room.roomNumber}</td>
                  <td>{room.contactNumber}</td>
                  <td>{room.email}</td>
                  <td>{room.checkIn}</td>
                  <td>{room.checkOut}</td>
                  <td>{room.package}</td>
                  <td>{room.status}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => handleCleanRoom(room.id, room.slip)}
                    >
                      <img src={clean} alt="Clean" width="40" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  No booked rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookedRooms;
