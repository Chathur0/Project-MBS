import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Close from "/productpage/close.png";
import Oil from "/productpage/oil.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Pay() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Handle the file upload here
    }
  };
  
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <h4 style={{ fontWeight: "bold" }}>My Cart</h4>
            </Col>
            <Col xs={2} className="d-flex justify-content-end">
              <Link to="/Product-home">
                <button style={{ background: "none", border: "none" }}>
                  <img src={Close} alt="Close" style={{ width: "20px", height: "20px" }} />
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mt-3">
            <Col xs={6} sm={4} className="d-flex flex-column align-items-start">
              <button style={{ background: "none", border: "none" }}>
                <img src={Close} alt="Close" style={{ width: "20px", height: "20px" }} />
              </button>
              <Image src={Oil} rounded style={{ width: "100%", maxWidth: "200px", height: "auto" }} />
            </Col>
            <Col xs={6} sm={4} className="d-flex flex-column align-items-center justify-content-between">
              <div>
                <h5>Bliss Cinnamon Oil - 10ml </h5>
                <Button variant="outline-primary" style={{ border: "solid" }}>+</Button>{" "}
                <label htmlFor="count" style={{ border: "solid", width: "40px", height: "40px", borderRadius: "4px", textAlign: "center", lineHeight: "40px" }}>1</label>
                <Button variant="outline-primary" style={{ border: "solid", marginLeft: "3px" }}>-</Button>{" "}
              </div>
              <div className="mt-3">
                <h5>$5.46</h5>
              </div>
            </Col>
            <Col xs={12} sm={4} className="d-flex align-items-center justify-content-center">
              <h5 className="text-center mt-3 mt-sm-0">Checkout: $5.46</h5>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="mt-3">
            <Col>
              <Card className="border-0">
                <Card.Body>
                  <Card.Title>Guideline for Payment</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Thank you for booking with us! Here's a step-by-step guide to complete your payment</Card.Subtitle>
                  <Card.Text>
                    <ol>
                      <li>Payment Steps:
                        <ul>
                          <li>Click on the "Proceed to Payment" button.</li>
                          <li>You will be redirected to the Nalanda Foundation website to complete your payment.</li>
                          <li>Follow the instructions on the Nalanda Foundation website to make your payment. This payment should include the total amount for your room booking.</li>
                          <li>Once your payment is successful, you will see a "Thank You" message on the Nalanda Foundation website confirming your payment.</li>
                        </ul>
                      </li>
                      <li>Confirmation Slip:
                        <ul>
                          <li>Take a screenshot of the "Thank You" message displayed after your payment is successful on the Nalanda Foundation website. This will serve as your confirmation slip.</li>
                          <li>Alternatively, if your bank provides a confirmation message after the transaction, you can take a screenshot of that message as well.</li>
                        </ul>
                      </li>
                      <li>Returning to Our Website:
                        <ul>
                          <li>After obtaining the confirmation slip, return to our website.</li>
                          <li>Upload the confirmation slip by following the instructions provided below.</li>
                          <li>This step confirms your payment and completes your room booking process.</li>
                        </ul>
                      </li>
                      <li>Completion:
                        <ul>
                          <li>Once you've uploaded the confirmation slip, your booking process is complete.</li>
                          <li>You'll receive a confirmation email shortly after, detailing your room booking and payment.</li>
                        </ul>
                      </li>
                      <li>Need Help?
                        <ul>
                          <li>If you encounter any issues during the payment process or have any questions, feel free to contact our support team for assistance. We're here to help!</li>
                        </ul>
                      </li>
                    </ol>
                    <h6>Know that your contribution to the Nalanda Foundation goes towards supporting students at IUHS campus, enabling them to pursue their education. IHUS Campus</h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-3">
        <Container>
          <Row>
            <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-start">
              <Button variant="success" style={{ width: "200px" }}>Proceed to Payment</Button>{' '}
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center justify-content-sm-end mt-3 mt-sm-0">
              <div style={{ position: 'relative', width: '200px' }}>
                <Button variant="light" style={{ width: "100%", backgroundColor: "#c1c1c1" }}>
                  Upload your slip here
                </Button>
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }} 
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-3">
        <Container>
          <Row>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <input
                type="checkbox"
                checked={isChecked} // Set the checked status based on state
                onChange={handleCheckboxChange} // Call the function when checkbox is changed
              />
              <label className="ml-2 mb-0">I have read and understand the payment process steps outlined above.</label>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="d-flex justify-content-center">
              <Button variant="success">Confirm Payment</Button>{' '}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pay;
