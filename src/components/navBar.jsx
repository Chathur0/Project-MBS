import logo from "/nav&footer/MBS LOGO_No Letters_1920x1080.png";
import profile from "/nav&footer/profile.png";
import {} from "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function Nav() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-1" href="#">
            <img src={logo} alt="Logo" width="50" height="50" className="" />
            <div className="fw-bold navLink">
              METH BO SEWANA
              <br />
              Meditation Center
            </div>
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
                <a className="nav-link fw-bold navLink navLinkEffect" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold navLink navLinkEffect" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold navLink navLinkEffect" href="#">
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold navLink navLinkEffect" href="#">
                  Accommodation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold navLink navLinkEffect" href="#">
                  Volunteer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold navLink navLinkEffect" href="#">
                  Product
                </a>
              </li>
            </ul>
            <div className="mx-0 mx-lg-5 d-flex align-items-center">
              <div className="d-flex gap-2 justify-content-lg-center align-items-center position-absolute visible">
                <a href="" className="navLink nav-link fw-bold">
                  Login
                </a>
                <div className="navLink fw-bold">/</div>
                <a href="" className="navLink nav-link fw-bold">
                  Register
                </a>
              </div>
              <div className="d-flex gap-2 justify-content-lg-center align-items-center invisible"> 
                <a href=""><img src={profile} alt="" width="50" /></a>
                <div className="fw-bold">Chathuranga</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
