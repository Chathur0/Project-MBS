import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Cover from "/productpage/cover.png";
import stick from "/productpage/stick.jpg";
import powder from "/productpage/powder.jpg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import oil from "/productpage/oil.jpg";
import tea from "/productpage/tea.jpg";

function first() {
  return (
    <>
      <div>
        <Container fluid="md" style={{ maxWidth: "100%" }}>
          <Row>
            <Col xs={12}>
              <Image style={{ maxWidth: "100%" }} src={Cover} fluid />
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid="md" style={{ maxWidth: "100%" }}>
        <Row
          style={{
            height: "150px",
            backgroundColor: "#05062D",
          }}
        >
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ color: "white", padding: "20px" }}>Cinnamon Bliss</h1>
          </Col>

          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="outline-success"
              style={{ width: "200px", marginBottom: "40px" }}
            >
              {" "}
              Shop Now
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row
          style={{
            marginTop: "30px",
          }}
        >
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              Cinnamon Bliss was started by Meth Bo Sewana, a rural Buddhist
              temple, to benefit the village community, create livelihood
              opportunities for underprivileged families, and ensure local
              children have access to quality education. They are using the
              traditional land owned by the temple to grow forest gardens of
              cinnamon, tea, and coconut and create value added products.
              Products include cinnamon quills, powder, incense sticks,
              essential oil, soap, and natural fragrance. Revenue is reinvested
              back into the community and used to provide educational
              facilities, classes, supplies, and online study opportunities for
              village children. They also support families in crisis with food
              and medicine. Cinnamon Bliss is working towards organic
              verification.
            </Col>
            <Col></Col>
          </Row>
        </Row>
      </Container>
      <h1 style={{ marginTop: "22px", marginLeft: "30px" }}>
        Cinnamon Bliss Products
      </h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={stick} thumbnail />
            <Card style={{ maxwidth :"100px" }}>
              <Card.Header
                style={{ backgroundColor: "#F79A1F", textAlign: "center" }}
              >
                Bliss Cinnamon Tea
              </Card.Header>
              <ListGroup variant="flush"></ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Image src={powder} thumbnail />
            <Card style={{ maxwidth :"100px" }}>
              <Card.Header
                style={{ backgroundColor: "#F79A1F", textAlign: "center" }}
              >
                Bliss Cinnamon Stick
              </Card.Header>
              <ListGroup variant="flush"></ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{marginTop : "30px"}}>
          <Col xs={6} md={4}>
            <Image src={oil} thumbnail />
            <Card style={{ maxwidth :"100px" }}>
              <Card.Header
                style={{ backgroundColor: "#F79A1F", textAlign: "center" }}
              >
                Bliss Cinnamon Oil
              </Card.Header>
              <ListGroup variant="flush"></ListGroup>
            </Card>
          </Col>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Image src={tea} thumbnail />
            <Card style={{ maxwidth :"100px" }}>
              <Card.Header
                style={{ backgroundColor: "#F79A1F", textAlign: "center" }}
              >
                Bliss Cinnamon Powder
              </Card.Header>
              <ListGroup variant="flush"></ListGroup>
            </Card>
          </Col>
          <Col xs={12} style={{marginTop : "30px",display : "flex",justifyContent : "center"}}>
          <Button variant="success" style={{width : "400px"}}>View All Products</Button>{' '}
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default first;
