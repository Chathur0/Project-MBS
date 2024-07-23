import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Cover from "/productpage/cover.png";
import cartIcon from "/productpage/ca.jpeg";  // Import the cart icon image
import { Link } from "react-router-dom";


function First() {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/getProducts')
      .then(response => {
        if (response.data.Status === 'Success') {
          setProducts(response.data.products);
        }
      })
      .catch(error => {
        console.error("Error fetching products", error);
      });
  }, []);
products.forEach(product => {
})
  const handleCartShow = () => setShowCart(true);
  const handleCartClose = () => setShowCart(false);

  const cartButtonStyle = {
    position: 'fixed',  
    bottom: '80px',     
    left: '20px',       
    
    padding: '10px 20px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000,       // Ensures the button stays on top of other elements
    display: 'flex',
    alignItems: 'center',  // Aligns items in the center vertically
    backgroundImage: `url(${cartIcon})`,  // Set the background image
    backgroundSize: 'cover',  // Cover the entire button
    backgroundPosition: 'center',  // Center the image
    color: 'transparent',  // Hide the text, only show the image
  };

  const cartPopupStyle = {
    position: 'fixed',  // Fixed position
    bottom: '150px',    // Adjust position to be above the button
    left: '20px',       // Align with the button
    width: 'calc(100% - 40px)', // Ensure it fits within the screen
    maxWidth: '300px',  // Set max width for larger screens
    padding: '10px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '5px',
    zIndex: 1001,       // Ensure it is above other elements
    display: showCart ? 'block' : 'none',  // Toggle display based on state
  };

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
            <Col xs={1}></Col>
            <Col xs={12} className="text-center"> {/* Center the paragraph */}
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
            <Col xs={1}></Col>
          </Row>
        </Row>
      </Container>
      <h1 style={{ marginTop: "22px", marginLeft: "30px" }}>
        Cinnamon Bliss Products
      </h1>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col xs={12} md={4} key={index}>
              <Link to={`/Product/${product.pd_id}`}>
                <Image src={`http://localhost:3000/product_images/${product.pd_image}`} thumbnail />
              </Link>
              <Card style={{ maxWidth: "300px" }}>
                <Card.Header
                  style={{ backgroundColor: "#F79A1F", textAlign: "center" }}
                >
                  {product.pd_type}
                </Card.Header>
                <ListGroup variant="flush"></ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </>
  );
}

export default First;
