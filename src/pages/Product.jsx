import React, { useEffect, useState } from 'react';
import Nav from '../components/navBar';
import Footer from '../components/footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/getProduct/${id}`)
      .then(response => {
        if (response.data.Status === 'Success') {
          setProduct(response.data.product);
        }
      })
      .catch(error => {
        console.error("Error fetching product", error);
      });
  }, [id]);

  const handleClick = () => {
    const productData = {
      id: id,
      name: product.pd_type,
      image: `http://localhost:3000/product_images/${product.pd_image}`,
      quantity: quantity,
      totalPrice: product.pd_price * quantity
    };
    console.log(productData);
    navigate('/checkout', { state: { product: productData } });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <div>
        <Container className="mt-4">
          <Row className="mt-4">
            <Col xs={12} md={6}>
              <Image src={`http://localhost:3000/product_images/${product.pd_image}`} rounded style={{ height: "200px" }} />
            </Col>
            <Col xs={12} md={6}>
              <h4>{product.pd_type}</h4>
              <h5>Product Features</h5>
              <p>{product.pd_description}</p>
              <label className="bg-light mt-3 ml-3">Deliver To Sri Lanka</label>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <h4 className="ml-3">Available Quantity: {product.qty}</h4>
              <Form.Control
                className="mt-3 ml-3"
                style={{ width: "100px", border: "solid" }}
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                max={product.qty}
              />
              <Button variant="success" className="mt-3 ml-3" onClick={handleClick}>
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
