import React, { useState, useEffect } from "react";
import iDelete from "/icons/delete.png";
import edit from "/icons/pencil.png";
import { Link } from "react-router-dom";
import axios from "axios";
import warning from "/icons/warning.png";

function AllRooms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomToDelete, setRoomToDelete] = useState(null);
  useEffect(() => {
    // Fetch room data from backend
    axios
      .get("http://localhost:3000/accommodation/allRooms")
      .then((response) => {
        if (response.data.Status === "Success") {
          const fetchedRooms = response.data.data.map((room) => ({
            id: room.r_id,
            image: room.first_image, // Adjust this if necessary
            roomNumber: `${
              room.type.charAt(0).toUpperCase() + room.type.slice(1)
            } nm ${room.r_name}`,
          }));
          setRooms(fetchedRooms);
        } else {
          console.error("Failed to fetch rooms:", response.data.Message);
        }
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);
  const confirmDelete = (roomId) => {
    setRoomToDelete(roomId);
    const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "block";
  };
  const handleDelete = () => {
    axios
      .get(`http://localhost:3000/api/all-booked-rooms/${roomToDelete}`)
      .then((response) => {
        if (response.data.length > 0) {
          const deleteModal = document.getElementById("deleteModal");
          deleteModal.style.display = "none";
          alert(
            "This room cannot be deleted because it is already booked or pending for book please check."
          );
        } else {
          axios
            .delete(`http://localhost:3000/accommodation/deleteRoom/${roomToDelete}`)
            .then((response) => {
              if (response.data.Status === "Success") {
                setRooms(rooms.filter((room) => room.id !== roomToDelete));
              } else {
                console.error("Failed to delete room:", response.data.Message);
              }
              const deleteModal = document.getElementById("deleteModal");
              deleteModal.style.display = "none";
            })
            .catch((error) => {
              console.error("Error deleting room:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error checking booking status:", error);
      });
  };
  const closeModal = () => {
    const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "none";
  };
  const filteredRooms = rooms.filter((room) =>
    room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container text-center">
      <h2 style={{ color: "#05062d" }} className="mb-5">
        All Rooms
      </h2>
      <div className="row">
        <div className="col-12 bg-danger bg-light p-3 rounded-3 border w-100">
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
                    src={`http://localhost:3000/A_images/${data.image}`}
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
                    className="container fw-bold text-white position-relative"
                    style={{
                      top: "-240px",
                    }}
                  >
                    <div
                      className="rounded"
                      style={{ backgroundColor: "#05062d" }}
                    >
                      {data.roomNumber}
                    </div>
                  </div>
                  <div
                    className="container d-flex justify-content-between position-relative"
                    style={{ top: "-75px" }}
                  >
                    <img
                      src={iDelete}
                      alt=""
                      width={40}
                      height={40}
                      onClick={() => confirmDelete(data.id)}
                      style={{ cursor: "pointer" }}
                    />
                    <Link to={`/accommodation-admin/edit-room/${data.id}`}>
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
      {/* Delete Confirmation Modal */}
      <div
        className="modal"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content row">
            <div className="col-12 mt-3 d-flex justify-content-between">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirm Delete
              </h5>
              <button
                type="button"
                className="close btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <img src={warning} alt="" width={100} height={100} />
              <p className="fw-bold text-danger mt-1">
                Are you sure you want to delete this room?
              </p>
            </div>
            <div className="container d-flex justify-content-between mb-2">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllRooms;
