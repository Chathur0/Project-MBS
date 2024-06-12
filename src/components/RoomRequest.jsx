import React, { useState, useEffect } from "react";
import Slip from "/Slip-images/slip1.jpg";
import axios from "axios";

function RoomRequest() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSlip, setSelectedSlip] = useState(null);
  const [roomRequestsData, setRoomRequestsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pending-approval")
      .then((response) => {
        const fetchedData = response.data.map((item) => ({
          name: item.f_name,
          roomNumber: `${
            item.type.charAt(0).toUpperCase() + item.type.slice(1)
          } nm ${item.r_name}`,
          contactNumber: item.m_number,
          bookedDate: new Date(item.b_date).toISOString().split("T")[0],
          checkIn: new Date(item.check_in).toISOString().split("T")[0],
          checkOut: new Date(item.check_out).toISOString().split("T")[0],
          package: item.package,
          totalPayment: `${item.b_cost} LKR`,
          slip: `http://localhost:3000/slip/${item.b_slip}`,
          id: item.b_id,
        }));
        setRoomRequestsData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

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

  const handleApprove = (id) => {
    if (window.confirm("Are you sure you want to approve this booking?")) {
      axios
        .post("http://localhost:3000/api/approve-booking", { b_id: id })
        .then((response) => {
          console.log(response.data);

          setRoomRequestsData((prevData) =>
            prevData.filter((request) => request.id !== id)
          );
        })
        .catch((error) => {
          console.error("Error approving booking: ", error);
        });
    }
  };

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
              <th>Booked Date</th>
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
                  <td>{request.bookedDate}</td>
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
                    <button
                      className="btn btn-success"
                      onClick={() => handleApprove(request.id)}
                    >
                      Approve
                    </button>
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
              style={{ position: "absolute" }}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomRequest;
