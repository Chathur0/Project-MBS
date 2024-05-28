import React, { useState } from "react";
import Dp from "/nav&footer/profile.png";
import clean from "/icons/clean.png";

const bookedRoomsData = [
    {
        profile: Dp,
        name: "John Doe",
        roomNumber: 101,
        contactNumber: "1234567890",
        email: "johndoe@example.com",
        checkIn: "2024-05-20",
        checkOut: "2024-05-25",
        package: "BB",
        status: "Guest",
      },
      {
        profile: Dp,
        name: "Jane Smith",
        roomNumber: 102,
        contactNumber: "0987654321",
        email: "janesmith@example.com",
        checkIn: "2024-05-21",
        checkOut: "2024-05-26",
        package: "FB",
        status: "Visited",
      },
      {
        profile: Dp,
        name: "Bob Johnson",
        roomNumber: 103,
        contactNumber: "1122334455",
        email: "bobjohnson@example.com",
        checkIn: "2024-05-22",
        checkOut: "2024-05-27",
        package: "HB",
        status: "Guest",
      },
      {
        profile: Dp,
        name: "Alice Brown",
        roomNumber: 104,
        contactNumber: "2233445566",
        email: "alicebrown@example.com",
        checkIn: "2024-05-23",
        checkOut: "2024-05-28",
        package: "BB",
        status: "Visited",
      },
      {
        profile: Dp,
        name: "Charlie Davis",
        roomNumber: 105,
        contactNumber: "3344556677",
        email: "charliedavis@example.com",
        checkIn: "2024-05-24",
        checkOut: "2024-05-29",
        package: "FB",
        status: "Guest",
      },
      {
        profile: Dp,
        name: "Diana Evans",
        roomNumber: 106,
        contactNumber: "4455667788",
        email: "dianaevans@example.com",
        checkIn: "2024-05-25",
        checkOut: "2024-05-30",
        package: "HB",
        status: "Guest",
      },
      {
        profile: Dp,
        name: "Edward Foster",
        roomNumber: 107,
        contactNumber: "5566778899",
        email: "edwardfoster@example.com",
        checkIn: "2024-05-26",
        checkOut: "2024-05-31",
        package: "BB",
        status: "Guest",
      },
      {
        profile: Dp,
        name: "Fiona Green",
        roomNumber: 108,
        contactNumber: "6677889900",
        email: "fionagreen@example.com",
        checkIn: "2024-05-27",
        checkOut: "2024-06-01",
        package: "FB",
        status: "User",
      },
      {
        profile: Dp,
        name: "George Hill",
        roomNumber: 109,
        contactNumber: "7788990011",
        email: "georgehill@example.com",
        checkIn: "2024-05-28",
        checkOut: "2024-06-02",
        package: "HB",
        status: "Guest",
      },
      {
        profile: Dp,
        name: "Hannah White",
        roomNumber: 110,
        contactNumber: "8899001122",
        email: "hannahwhite@example.com",
        checkIn: "2024-05-29",
        checkOut: "2024-06-03",
        package: "BB",
        status: "User",
      },
];

function BookedRooms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredRooms = bookedRoomsData.filter(
    (room) =>
      (room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.contactNumber.includes(searchQuery)) &&
      (statusFilter === "" || room.status === statusFilter)
  );

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
              <option value="Guest">Guest</option>
              <option value="Visited">Visited</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="mt-3 table table-hover border">
          <thead>
            <tr>
              <th>Profile</th>
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
                  <td>
                    <img src={room.profile} alt="Profile" width="40" />
                  </td>
                  <td>{room.name}</td>
                  <td>{room.roomNumber}</td>
                  <td>{room.contactNumber}</td>
                  <td>{room.email}</td>
                  <td>{room.checkIn}</td>
                  <td>{room.checkOut}</td>
                  <td>{room.package}</td>
                  <td>{room.status}</td>
                  <td>
                    <button className="btn">
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
