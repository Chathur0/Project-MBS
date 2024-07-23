import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import stick from '../../public/product-images/stick.jpg';
import powder from '../../public/product-images/powder.jpeg';
import oil from '../../public/product-images/oil.jpeg';
import tea from '../../public/product-images/tea.jpg';
import iDelete from '../../public/product-images/delete.png';
import edit from '../../public/product-images/pencil.png';
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

const productData = [
  { name: 'Bliss Cinnamon Stick', img: stick },
  { name: 'Bliss Cinnamon Powder', img: powder },
  { name: 'Bliss Cinnamon Oil', img: oil },
  { name: 'Bliss Cinnamon Tea', img: tea },
];


const ProductCard = ({ product }) => (
  <Col xs={12} md={6} lg={3} className="position-relative mb-4">
    <div className="position-relative">
      <Image src={product.img} thumbnail style={{ height: "200px" }} />
      <div className="position-absolute w-100 d-flex justify-content-between p-2" style={{ top: 10 }}>
        <Link to={`/edit/${product.name}`}>
          <Button variant="link" className="p-0">
            <Image src={edit} style={{ width: '24px', height: '24px' }} />
          </Button>
        </Link>
      </div>
    </div>
    <div className="text-center mt-2">
      <h5>{product.name}</h5>
    </div>
  </Col>
);

const AllProducts = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/checkAdmin", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.Status === "Success" && res.data.isAdmin === "Admin") {
        } else {
          alert("You do not have permission to access this page");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">All Products</h1>
      <Row>
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default AllProducts;
