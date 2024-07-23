import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Checkout() {
  const [user, setUser] = useState({ userId: "", name: "" });
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
            setUser({ userId: res.data.userId, name: res.data.name });
          } else {
            alert("your have to log in to the system")
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/login");
    }
  }, []);


  const location = useLocation();
  const { product } = location.state || {};
  const [file, setFile] = useState(null);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePayment = () => {
    const formData = new FormData();
    formData.append('u_id', user); // Replace with actual user ID
    formData.append('pd_id', product.id);
    formData.append('qty', product.quantity);
    formData.append('o_slip', file);

    axios.post('http://localhost:3000/createOrder', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
      }
    })
      .then(response => {
        if (response.status === 200) {
          alert('Payment Success');
          navigate('/product-home');
        }
      })
      .catch(error => {
        console.error('Error creating order', error);
        alert('Payment failed');
      });
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <div>
        <img src={product.image} alt={product.name} style={{ height: '200px' }} />
        <p>Name: {product.name}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Total Price: ${product.totalPrice}</p>
      </div>
      <Form.Group>
        <Form.Label>Upload Document</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="danger" onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>Delete Product</Button>
      <Button variant="success" className="ml-3" onClick={handlePayment} style={{ marginTop: "20px", marginLeft: "20px" }}>Proceed to Payment</Button>
    </Container>
  );
}

export default Checkout;