import logo from "/nav&footer/MBS LOGO_No Letters_1920x1080.png";
import location from "/nav&footer/location.png";
import phone from "/nav&footer/phone.png";
import email from "/nav&footer/email.png";
import fb from "/nav&footer/fb.png";
import yt from "/nav&footer/yt.png";
import instr from "/nav&footer/instr.png";
import tw from "/nav&footer/tw.png";
import {} from "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="container-fluid " style={{backgroundColor:'#05062d'}}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4 col-12 mb-5 mt-5">
            <a
              href=""
              className="nav-link d-flex flex-column align-items-center"
            >
              <img src={logo} alt="Logo" width="100" height="100" />
              <p className="fw-bold text-white text-center">
                METH BO SEWANA MEDITATION CENTER
              </p>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 text-white">
            <div className="container mb-5">
              <div className="row">
                <div className="col-1 "></div>
                <div className="col-11 ">
                  <h4 className="mb-3">Contact Us</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <img src={location} width="20" alt="" />
                </div>
                <div className="col-11 ">
                  <p className="">
                    Meth Bo Sewana Vipassana Meditation Center | Hawpakanda,
                    Thithtagalla, Ahangama.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-1 ">
                  <img src={phone} width="20" alt="" />
                </div>
                <div className="col-11 ">
                  <p>+94 91-499-8789</p>
                </div>
              </div>

              <div className="row">
                <div className="col-1 ">
                  <img src={email} width="20" alt="" />
                </div>
                <div className="col-11 ">
                  <a href="" className="text-decoration-none text-white">
                    info@methbosewana.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-sm-6 text-white">
            <div className="container">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                  <h4>Quick links</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                  <ul className="list-unstyled">
                    <li>
                      <a href="" className="text-decoration-none text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none text-white">
                        Accommodation
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none text-white">
                        Program
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none text-white">
                        Product
                      </a>
                    </li>
                    <li>
                      <a href="" className="text-decoration-none text-white">
                        Volunteer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-sm-6 text-white">
            <div className="container">
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                  <h4>Stay connected</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11 gap-2 d-flex">
                  <a href="">
                    <img src={fb} alt="" width="40" />
                  </a>
                  <a href="">
                    <img src={yt} alt="" width="40" />
                  </a>
                  <a href="">
                    <img src={tw} alt="" width="40" />
                  </a>
                  <a href="">
                    <img src={instr} alt="" width="40" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <hr style={{border:'1px solid #ffffff', margin: '20px 0'}} />
          <div className="d-flex gap-3 mb-4">
            <a href="" className="text-white">Privacy Policy</a>
            <div className="text-white">|</div>
            <a href="" className="text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
