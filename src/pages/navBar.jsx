import { Link } from "react-router-dom";
import logo from "/nav&footer/MBS LOGO_No Letters_1920x1080.png";
import profile from "/nav&footer/profile.png";
import {} from "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Nav() {
  
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ userId: "", name: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/checkToken", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.valid) {
            setAuth(true);
            setUser({ userId: res.data.userId, name: res.data.name });
          } else {
            setAuth(false);
          }
        })
        .catch((err) => {
          setAuth(false);
        });
    } else {
      setAuth(false);
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/checkAdmin", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.Status === "Success" && res.data.isAdmin === "Admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <style>
        {`
  .navLink{
    color: #05062d;
  }
  .navLinkEffect::after {
    content: '';
    width: 0%;
    height: 2px;
    background: #05062d;
    display: block;
    margin: auto;
    transition: 0.5s;
}
.navLinkEffect:hover::after {
  width: 100%;
}
.invisible{
  display: none;
}
.visible{
  display: block;
}
  `}
      </style>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-1" href="#">
            <img src={logo} alt="Logo" width="50" height="50" className="" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="fw-bold navLink">
                METH BO SEWANA
                <br />
                Meditation Center
              </div>
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/all-admins"
                  className={`nav-link fw-bold navLink navLinkEffect d-${isAdmin ? 'block' : 'none'}`}
                >
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold navLink navLinkEffect">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold navLink navLinkEffect"
                  to="/about_us"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/program"
                  className="nav-link fw-bold navLink navLinkEffect"
                  href="#"
                >
                  Program
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold navLink navLinkEffect"
                  to="/accommodation"
                >
                  Accommodation
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/volunteer-page"
                  className="nav-link fw-bold navLink navLinkEffect"
                  href="#"
                >
                  Volunteer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/product-home"
                  className="nav-link fw-bold navLink navLinkEffect"
                  href="#"
                >
                  Product
                </Link>
              </li>
            </ul>
            <div className="mx-0 mx-lg-5 d-flex align-items-center">
              <div
                className={`d-flex gap-2 justify-content-lg-center align-items-center position-absolute ${
                  auth ? "invisible" : "visible"
                }`}
              >
                <Link to="/login" className="navLink nav-link fw-bold">
                  Login
                </Link>
                <div className="navLink fw-bold">/</div>
                <Link to="/Register" className="navLink nav-link fw-bold">
                  Register
                </Link>
              </div>
              <div
                className={`d-flex gap-2 justify-content-lg-center align-items-center ${
                  auth ? "visible" : "invisible"
                }`}
              >
                <Link to="/Profile">
                  <img src={profile} alt="" width="50" />
                </Link>
                <div className="fw-bold">{`${
                  auth ? user.name : "Chathuranga"
                }`}</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
