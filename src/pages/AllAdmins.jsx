import React from "react";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AllAdmins() {
  const navigate = useNavigate();
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
    } `}</style>
      <Nav />
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <Link to="/userAdmin" className="btn btn-custom w-100">Users</Link>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <Link to="/accommodation-admin/booked-room" className="btn btn-custom w-100">Accommodation</Link>
          </div>
          <div className="col-6 col-md-4 col-lg-2 mb-3">
            <Link to="/Addpreviousp" className="btn btn-custom w-100">Programs</Link>
          </div>
          <div className="col-6 col-md-6 col-lg-2 mb-3">
            <Link to="/product-admin" className="btn btn-custom w-100 ">Product</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-2 mb-3">
            <Link to="/volunteer-admin" className="btn btn-custom w-100">Volunteer</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
