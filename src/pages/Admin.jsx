import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Delete from "/productpage/delete.jpeg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [orders, setOrders] = useState([]);
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


  
  useEffect(() => {
    axios.get("http://localhost:3000/getOrders")
      .then((res) => {
        if (res.data.Status === "Success") {
          setOrders(res.data.orders);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (orderId) => {
    axios.delete(`http://localhost:3000/deleteOrder/${orderId}`)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("deleted");
          setOrders(orders.filter(order => order.o_id !== orderId));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>All Orders</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="d-flex justify-content-between">
          <Link to="/add-product" className="w-100">
            <Button variant="success" className="w-100">Add Product</Button>
          </Link>
          <Link to="/AllProducts" className="w-100 ml-md-auto mt-2 mt-md-0">
            <Button variant="success" className="w-100">All Products</Button>
          </Link>
        </Col>
      </Row>
      <div className="table-responsive" style={{ marginTop: "30px" }}>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Order</th>
              <th>Quantities</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.o_id}>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.productName}</td>
                <td>{order.qty}</td>
                <td>
                  <button
                    onClick={() => handleDelete(order.o_id)}
                    style={{ border: "none", backgroundColor: "white" }}
                  >
                    <img
                      src={Delete}
                      alt="Delete"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Admin;