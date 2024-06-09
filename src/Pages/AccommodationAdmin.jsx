import { Link } from "react-router-dom";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/checkAdmin", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.Status === "Success" && res.data.isAdmin === "Admin") {
        } else {
          alert("You do not have permission to access this page");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <style>{`
      .btn-custom{
        color: white;
        font-weight: 900;
        background-color: #3f7b48;
    }
    
    .btn-custom:hover{
        color: #3f7b48;
        background-color: white;
        border: 2px solid #3f7b48;
    } 
    table td, table th {
        vertical-align: middle;
      }
    
      `}</style>
      <Nav />
      <div className="container my-5">
        <div className=" container text-center">
          <h3 className="mt-2 mb-2 fw-bolder" style={{ color: "#05062d" }}>
            ACCOMMODATION ADMIN
          </h3>
          <div className="row my-5">
            <div className="col-6 col-md-3 mb-2">
              <Link
                to="/accommodation-admin/booked-room"
                className="btn btn-custom w-100"
              >
                Booked Rooms
              </Link>
            </div>
            <div className="col-6 col-md-3 mb-2">
              <Link
                to="/accommodation-admin/add-room"
                className="btn btn-custom w-100"
              >
                Add Room
              </Link>
            </div>
            <div className="col-6 col-md-3">
              <Link
                to="/accommodation-admin/room-request"
                className="btn btn-custom w-100"
              >
                Room Request
              </Link>
            </div>
            <div className="col-6 col-md-3">
              <Link
                to="/accommodation-admin/all-rooms"
                className="btn btn-custom w-100"
              >
                All Rooms
              </Link>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
