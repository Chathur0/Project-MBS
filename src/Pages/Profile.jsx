import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Image1 from "/login/image7.jpg";
import Image2 from "/login/pic18.png";
import Image3 from "/login/pic25.png";
import { Image } from "react-bootstrap";
import Image4 from "/login/profile.png";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Profile() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({ userId: "", name: "" });
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
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
            navigate("/login");
          }
        })
        .catch((err) =>{
          setAuth(false);
          console.log(err)});
    }
  }, [navigate]);

  const handleLogout = () => {
    axios
      .get("http://localhost:3000/logout")
      .then((res) => {
        if (res.data.Status === "Success") {
            localStorage.removeItem("token");
            localStorage.removeItem("bookingDetails");
          navigate("/");
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Nav />
      <div
        className="All"
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(129, 199, 143, 0.288",
        }}
      >
        <Container
          className="Profile"
          style={{
            maxWidth: "1000px",
            backgroundColor: "rgba(129, 199, 143, 0.288",
          }}
        >
          <Row>
            <Col md={6} style={{ textAlign: "center" }}>
              <img
                src={Image1}
                alt="Profile"
                style={{
                  width: "90%",
                  height: "90%",
                  marginTop: "30px",
                  marginBottom: "10px",
                }}
              />
            </Col>
            <Col
              md={6}
              style={{
                backgroundColor: "white",
                padding: "10px",
                marginTop: "40px",
                marginBottom: "50px",
                width: "80%",
                maxWidth: "400px",
              }}
            >
              <Form style={{ marginTop: "30px" }}>
                <h1 style={{ textAlign: "center", float: "left" }}>PROFILE</h1>

                <Row
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  <Col xs={6}>
                    <Image
                      src={Image4}
                      rounded
                      style={{
                        maxWidth: "100%",
                        width: "100px",
                        marginLeft: "50px",
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder={user.name} />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Gamage" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="text" placeholder="0763458766" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="lakshan@gmail.com"
                    />
                  </Form.Group>
                </Row>
                <div className="row">
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                    className="gap-2"
                  >
                    <Link to="/EProfile" className="w-100">
                      <Button
                        variant="success"
                        type="submit"
                        className="custom-button"
                        style={{ width: "100%" }}
                      >
                        EDIT
                      </Button>
                    </Link>
                    <Link to="/" className="w-100">
                      <Button
                        variant="success"
                        type="submit"
                        className="custom-button"
                        style={{ width: "100%" }}
                      >
                        BACK
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                  <Button
                        variant="success"
                        className="custom-button"
                        style={{ width: "100%" }}
                        onClick={handleLogout}
                      >
                        LOG OUT
                      </Button>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
