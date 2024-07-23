import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';

function Edit() {
  const { name } = useParams();
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${name}`);
        setProducts(response.data);
        if (response.data.length > 0) {
          const product = response.data[0];
          setProductId(product.pd_id);
          setProductName(product.pd_type);
          setPrice(product.pd_price);
          setQuantity(product.qty);
          setDescription(product.pd_description);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [name]);
console.log(productId);
  const handleEdit = () => {
    const data = {
      pd_price: price,
      qty: quantity,
      pd_description: description,
    };
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

    axios.put(`http://localhost:3000/updateProduct/${productId}`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "Success") {
          alert("Product updated successfully");
          navigate('/AllProducts')
        } else {
          alert("Failed to update product");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred while updating the product");
      });
  };

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Edit Product</h1>
          </Col>
        </Row>
      </Container>

      <Container fluid="md">
        <Row>
          <Col>
            <h5>{`Product Name: ${productName}`}</h5>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4}>
            <h5>Price:</h5>
          </Col>
          <Col xs={12} md={8}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4}>
            <h5>Available Quantity:</h5>
          </Col>
          <Col xs={12} md={8}>
            <input
              type="text"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={4}>
            <h5>Description:</h5>
          </Col>
          <Col xs={12} md={8}>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex justify-content-center justify-content-md-end">
            <Button variant="success" className="w-100 w-md-25" onClick={handleEdit}>
              Edit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Edit;
