import React from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Image1 from '/login/image7.jpg';
import Image2 from '/login/pic18.png';
import Image3 from '/login/pic25.png';
import { Image } from 'react-bootstrap';
import Image4 from '/login/profile.png';
import { useRef, useState } from 'react';
import Nav from '../components/navBar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';


function EProfile() {
  const inputRef = useRef(null);


  const handleImageClick = () => {
    inputRef.current.click();

  };


  return (
    <div>
      <Nav />
      <div className='All' style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(129, 199, 143, 0.288' }}>
        <Container className="EProfile" style={{ maxWidth: '1000px', backgroundColor: 'rgba(129, 199, 143, 0.288' }}>
          <Row  >
            <Col md={6} style={{ textAlign: 'center' }}>
              <img src={Image1} alt="EProfile" style={{ width: '90%', height: '90%', marginTop: '30px', marginBottom: '10px' }} />
            </Col>
            <Col md={6} style={{ backgroundColor: 'white', padding: '10px', marginTop: '40px', marginBottom: '50px', width: '80%', maxWidth: '400px' }}>



              <Form style={{ marginTop: '30px' }}>
                <h1 style={{ textAlign: 'center', float: 'left' }}>EDIT PROFILE</h1>

                <Row style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px', width: '500px' }}>
                  <Col xs={6}>
                    <div onClick={handleImageClick}>
                      <Image src={Image4} rounded style={{ maxWidth: '100px', width: '100%', marginLeft: '50px', cursor: 'pointer' }} />
                      <input type='file' ref={inputRef} style={{ display: "none", }} />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control style={{ backgroundColor: '#DCFDBC' }} type="text" placeholder="Lashan" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control style={{ backgroundColor: '#DCFDBC' }} type="text" placeholder="Gamage" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="phoneNumber">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control style={{ backgroundColor: '#DCFDBC' }} type="text" placeholder="0763458766" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control style={{ backgroundColor: '#DCFDBC' }} type="email" placeholder="lakshan@gmail.com" />
                  </Form.Group>
                </Row>



                <div style={{ width: '90%', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                  <Button variant="success" type="submit" className="custom-button" style={{ width: '100%', padding: '10px' }}>
                    Save
                  </Button>
                  <Link to="/profile">
                    <Button variant="success" type="submit" className="custom-button" style={{ width: '100%', marginLeft: '20px', padding: '10px' }}>
                      BACK
                    </Button>
                  </Link>

                </div>



              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default EProfile;
