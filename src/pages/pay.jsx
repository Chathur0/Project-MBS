import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";
import Oil from "/productpage/oil.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Pay() {
  return (
    <>
      <div>
        <Container xs={12}>
          <Row style={{}}>
            <Col style={{ fontWeight: "bold" }}>
              <h4>My Cart</h4>
            </Col>
            <Col style={{ marginLeft: "900px" }}>
              <CloseButton
                aria-label="Hide"
                style={{ backgroundColor: "red" }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{ marginTop: "30px" }}>
            <Col>
              <Image
                src={Oil}
                rounded
                style={{ width: "200px", height: "100px" }}
              />
            </Col>
            <Col>
              <h5>Bliss Cinnamon Oil - 10ml </h5>
              <Button variant="+" style={{ border: "solid" }}>
                +
              </Button>{" "}
              <label
                htmlFor="count"
                style={{
                  border: "solid",
                  marginTop: "30px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "4px",
                }}
              >
                1
              </label>
              <Button
                variant="-"
                style={{ border: "solid", marginLeft: "3px" }}
              >
                -
              </Button>{" "}
            </Col>
            <Col>
              <h5 >$5.46</h5>
            </Col>
              <h5 style={{display : "flex",justifyContent : "center",marginTop : "30px"}}>Checkout : $5.46</h5>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col style={{ marginTop: "30px" }}>
              <Card style={{ width: "1100px", marginLeft: "200px",border:"none" }}>
                <Card.Body>
                  <Card.Title>Guideline for Payment </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Thank you for booking with us! Here's a step-by-step guide
                    to complete your payment
                  </Card.Subtitle>
                  <Card.Text style={{width : "1000px"}}>
                    <ol>
                      <li>Payment Steps: <ul>
                        <li>click on the "Proceed to Payment" button.</li>
                        <li>You will be redirected to the Nalanda Foundation website to complete your payment.</li>
                        <li>Follow the instructions on the Nalanda Foundation website to make your payment. This payment should includes the total amount for your room booking.</li>
                        <li>Once your payment is successful, you will see a "Thank You" message on the Nalanda Foundation website confirming your payment</li>
                        </ul>
                        </li>
                    
                   <li>Confirmation Slip:</li> 
                    <ul>
                      <li>
                      Take a screenshot of the "Thank You" message displayed after your payment is successful on the Nalanda Foundation website. This will serve as your confirmation slip.
                      </li>
                      <li>
                      Alternatively, if your bank provides a confirmation message after the transaction, you can take a screenshot of that message as well
                      </li>
                    </ul>
                    <li>
                    Returning to Our Website:
                    <ul>
                      <li>
                      After obtaining the confirmation slip, return to our website.
                      </li>
                      <li>
                      Upload the confirmation slip by following the instructions provided below.
                      </li>
                      <li>
                      This step confirms your payment and completes your room booking process.
                      </li>
                    </ul>
                    </li>
                    <li>
                    Completion:
                    <ul>
                      <li>
                      Once you've uploaded the confirmation slip, your booking process is complete.
                      </li>
                      <li>
                      You'll receive a confirmation email shortly after, detailing your room booking and payment.
                      </li>
                    </ul>
                    </li>
                    <li>
                    Need Help?
                    <ul>
                      <li>
                      If you encounter any issues during the payment process or have any questions, feel free to contact our support team for assistance. We're here to help!
                      </li>
                    </ul>
                    </li>
                    </ol>
                    <h6>
              Know that your contribution to the Nalanda Foundation goes towards supporting students at IUHS campus, enabling them to pursue their education. IHUS Campus
            </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{marginTop : "30px",marginLeft : "300px"}}>
      <Button variant="success" style={{width : "200px"}}>Proceed to Payment</Button>{' '}
      <Button variant="light" style={{marginLeft : "40px",width : "200px",backgroundColor : "#c1c1c1"}}>Upload your slip here</Button>{' '}
      </div>
    </>
  );
}

export default Pay;
