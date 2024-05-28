import React, { useState, useEffect } from "react";
import Slip from "/Slip-images/slip1.jpg";

const roomRequestsData = [
  {
    name: "Jane Doe",
    roomNumber: "Deluxe",
    contactNumber: "0987654321",
    email: "janedoe@example.com",
    checkIn: "2024-05-22",
    checkOut: "2024-05-27",
    package: "BB",
    totalPayment: "16250 LKR",
    slip: Slip,
  },
  {
    name: "John Smith",
    roomNumber: "Standard",
    contactNumber: "1234567890",
    email: "johnsmith@example.com",
    checkIn: "2024-06-01",
    checkOut: "2024-06-05",
    package: "HB",
    totalPayment: "10250 LKR",
    slip: Slip,
  },
  {
    name: "Alice Johnson",
    roomNumber: "Suite",
    contactNumber: "2345678901",
    email: "alicejohnson@example.com",
    checkIn: "2024-06-10",
    checkOut: "2024-06-15",
    package: "FB",
    totalPayment: "20500 LKR",
    slip: Slip,
  },
  {
    name: "Bob Brown",
    roomNumber: "Deluxe",
    contactNumber: "3456789012",
    email: "bobbrown@example.com",
    checkIn: "2024-06-20",
    checkOut: "2024-06-25",
    package: "BB",
    totalPayment: "16250 LKR",
    slip: Slip,
  },
  {
    name: "Carol Davis",
    roomNumber: "Standard",
    contactNumber: "4567890123",
    email: "caroldavis@example.com",
    checkIn: "2024-07-01",
    checkOut: "2024-07-05",
    package: "HB",
    totalPayment: "10250 LKR",
    slip: Slip,
  },
  {
    name: "David Wilson",
    roomNumber: "Suite",
    contactNumber: "5678901234",
    email: "davidwilson@example.com",
    checkIn: "2024-07-10",
    checkOut: "2024-07-15",
    package: "FB",
    totalPayment: "20500 LKR",
    slip: Slip,
  },
  {
    name: "Eve Evans",
    roomNumber: "Deluxe",
    contactNumber: "6789012345",
    email: "eveevans@example.com",
    checkIn: "2024-07-20",
    checkOut: "2024-07-25",
    package: "BB",
    totalPayment: "16250 LKR",
    slip: Slip,
  },
  {
    name: "Frank Green",
    roomNumber: "Standard",
    contactNumber: "7890123456",
    email: "frankgreen@example.com",
    checkIn: "2024-08-01",
    checkOut: "2024-08-05",
    package: "HB",
    totalPayment: "10250 LKR",
    slip: Slip,
  },
  {
    name: "Grace Hall",
    roomNumber: "Suite",
    contactNumber: "8901234567",
    email: "gracehall@example.com",
    checkIn: "2024-08-10",
    checkOut: "2024-08-15",
    package: "FB",
    totalPayment: "20500 LKR",
    slip: Slip,
  },
  {
    name: "Hank Lee",
    roomNumber: "Deluxe",
    contactNumber: "9012345678",
    email: "hanklee@example.com",
    checkIn: "2024-08-20",
    checkOut: "2024-08-25",
    package: "BB",
    totalPayment: "16250 LKR",
    slip: Slip,
  },
];

function RoomRequest() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSlip, setSelectedSlip] = useState(null);

  const filteredRequests = roomRequestsData.filter(
    (request) =>
      request.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.contactNumber.includes(searchQuery)
  );

  const handleSlipClick = (slip) => {
    setSelectedSlip(slip);
    window.history.pushState(null, null, window.location.href);
  };

  const handleCloseSlip = () => {
    setSelectedSlip(null);
    window.history.back();
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (selectedSlip) {
        handleCloseSlip();
        return true;
      }
      return false;
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [selectedSlip]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === "slip-modal") {
        handleCloseSlip();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container text-center">
      <h2 style={{ color: "#05062d" }}>Room Requests</h2>
      <div className="container text-center my-5">
        <div className="row bg-light p-3 rounded-3 border w-100">
          <div className="col-12">
            <input
              type="text"
              className="form-control w-100"
              placeholder="Search by User Name or Mobile Number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="mt-5 table table-hover border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Room Number</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Package</th>
              <th>Total Payment</th>
              <th>Slip</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request, index) => (
                <tr key={index}>
                  <td>{request.name}</td>
                  <td>{request.roomNumber}</td>
                  <td>{request.contactNumber}</td>
                  <td>{request.email}</td>
                  <td>{request.checkIn}</td>
                  <td>{request.checkOut}</td>
                  <td>{request.package}</td>
                  <td>{request.totalPayment}</td>
                  <td>
                    <img
                      src={request.slip}
                      alt="Slip"
                      width={60}
                      height={60}
                      onClick={() => handleSlipClick(request.slip)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <button className="btn btn-success">Approve</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  No booking requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedSlip && (
        <div
          id="slip-modal"
          className="modal d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1050,
          }}
        >
          <div
            className="modal-content"
            style={{ position: "relative", width: "80%", maxWidth: "600px" }}
          >
            <img
              src={selectedSlip}
              alt="Slip"
              className="img-fluid"
              style={{ width: "100%", height: "auto" }}
            />
            <button
              className="btn btn-close"
              onClick={handleCloseSlip}
              style={{ position: "absolute", top: 10, right: 10 }}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomRequest;
