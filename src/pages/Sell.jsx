import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import oil from "/productpage/oil.jpg";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Sell() {
  return (
    <>
      <div>
        <Container style={{marginTop : "30px"}}>
          <Row style={{ backgroundColor: "#cbcbcb" }}>
            <Col style={{ marginTop: "80px", marginLeft: "150px" }}>
              <Card.Link
                href="#"
                style={{
                  marginRight: "10px",
                  textDecorationLine: "none",
                  color: "#6e6e6e",
                }}
              >
                Home /
              </Card.Link>
              <Card.Link
                href="#"
                style={{
                  marginRight: "10px",
                  textDecorationLine: "none",
                  color: "#6e6e6e",
                }}
              >
                Product /
              </Card.Link>
              <Card.Link
                href="#"
                style={{
                  marginRight: "10px",
                  textDecorationLine: "none",
                  color: "#6e6e6e",
                }}
              >
                Cinnamon Oil
              </Card.Link>
            </Col>
            <Col style={{ display: "flex", justifyContent: "right" }}>
              <Image src={oil} rounded style={{ height: "200px" }} />
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col style={{ marginLeft: "100px" }}>
              <Image src={oil} rounded style={{ height: "200px" }} />
            </Col>
            <Col>
              <Card style={{ border: "none" }}>
                <Card.Body>
                  <h4>Bliss Cinnamon Oli</h4>
                  <h5>Product Features</h5>
                  <ul>
                    <li>
                      100% Pure Ceylon Cinnamon Leaf Oil (Cinnamomum Zeylanicum,
                      Cinnamomum Verum) Ultra-low Coumarin Levels
                    </li>
                    <li>Zero artificial or natural flavors</li>
                    <li>Minimum 75% Eugenol content</li>
                    <li>Zero additives</li>
                  </ul>
                </Card.Body>
              </Card>
              <label
                style={{
                  backgroundColor: "#cbcbcb",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                Deliver To Sri Lanka{" "}
              </label>
            </Col>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <Col></Col>
            <Col>
              <h4 style={{ marginLeft: "70px" }}>Product Range</h4>
              <Dropdown style={{ marginLeft: "70px" }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Choose an Option{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item style={{ fontWeight: "bold" }}>
                    10 ml
                  </Dropdown.Item>
                  <Dropdown.Item style={{ fontWeight: "bold" }}>
                    30 ml
                  </Dropdown.Item>
                  <Dropdown.Item style={{ fontWeight: "bold" }}>
                    100 ml
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                style={{
                  marginTop: "120px",
                  width: "100px",
                  marginLeft: "70px",
                  border: "solid",
                }}
                placeholder="Range"
              />
              <Button
                variant="success"
                style={{ marginLeft: "180px", marginTop: "-70px" }}
              >
                Add To Cart
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Sell;
