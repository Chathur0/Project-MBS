import React from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Image1 from "/login/image7.jpg";
import Image2 from "/login/pic18.png";
import Image3 from "/login/pic25.png";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/checkToken", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (res.data.valid) {
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);


  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem("token", res.data.token);
          navigate("/");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };
  const handleImageClick = () => {
    window.location.href = "https://myaccount.google.com/";
  };
  const handleImage1Click = () => {
    window.location.href = "https://www.facebook.com/";
  };

  return (
    <div>
      <Nav />
      <div
        className="All"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(129, 199, 143, 0.288",
        }}
      >
        <Container
          className="login"
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
                marginBottom: "40px",
                width: "80%",
                maxWidth: "400px",
              }}
            >
              <Form style={{ marginTop: "30px" }} onSubmit={handleSubmit}>
                <h1 style={{ textAlign: "center" }}>LOGIN</h1>

                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="Password">
                    <Form.Label> Password:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder=""
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>

                <Row style={{ marginTop: "30px" }}>
                  <Col md={12}>
                    <a
                      href="#"
                      style={{ textDecoration: "none", float: "left" }}
                    >
                      Forgot password?
                    </a>
                  </Col>
                </Row>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "30px",
                  }}
                >
                  <Button
                    variant="success"
                    type="submit"
                    className="custom-button"
                    style={{ width: "100%" }}
                  >
                    LOGIN
                  </Button>
                </div>

                <Row style={{ alignItems: "center", marginTop: "20px" }}>
                  <Col md={12}>
                    <p style={{ textAlign: "center" }}>
                      ________________ or ________________
                    </p>
                  </Col>
                </Row>

                <Row style={{ textAlign: "center", marginTop: "20px" }}>
                  <Col xs={6}>
                    <Image
                      src={Image2}
                      alt="Click to go to Google Account"
                      onClick={handleImageClick}
                      rounded
                      style={{
                        maxWidth: "100%",
                        width: "100px",
                        cursor: "pointer",
                      }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Image
                      src={Image3}
                      alt="Click to go to Facebook Account"
                      onClick={handleImage1Click}
                      rounded
                      style={{ maxWidth: "100%", width: "100px" }}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: "20px", textAlign: "center" }}>
                  <Col md={12}>
                    <p style={{ marginBottom: "0" }}>
                      Don't have an account?{" "}
                      <Link to="/Register" style={{ textDecoration: "none" }}>
                        Register now
                      </Link>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
