import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("qty", qty);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await axios.post("http://localhost:3000/addProduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.data.Status === "Success") {
        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    } catch (err) {
      console.error("Error adding product", err);
      alert("Error adding product");
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <h1>Add Product</h1>
          </Col>
        </Row>
      </Container>

      <Container fluid="md">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <h5>Details</h5>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={4}>
              <h5>Product Name:</h5>
            </Col>
            <Col xs={12} md={8}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
              <h5>Ranges:</h5>
            </Col>
            <Col xs={12} md={8}>
              <Dropdown as={ButtonGroup} className="w-100">
                <Button
                  variant="success"
                  className="w-100"
                  style={{ backgroundColor: "#CECECE" }}
                >
                  {qty}
                </Button>
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                  style={{ backgroundColor: "#CECECE" }}
                />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setQty("10")}>10ml</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("30")}>30ml</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("100")}>100ml</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("30")}>30 packets</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("100")}>100g</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("120")}>120g</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("250")}>250g</Dropdown.Item>
                  <Dropdown.Item onClick={() => setQty("1000")}>1000g</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
          <Row className="mt-3">
            <Col xs={12} md={4}>
              <h5>Image:</h5>
            </Col>
            <Col xs={12} md={8}>
              <input
                type="file"
                className="form-control-file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center justify-content-md-end">
              <Button type="submit" variant="success" className="w-100 w-md-25">
                Add Product
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
}

export default AddProduct;
