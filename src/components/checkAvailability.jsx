import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [totalDays, setTotalDays] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalDays(diffDays);
    } else {
      setTotalDays(0);
    }
  }, [startDate, endDate]);

  const handleCheckAvailability = () => {
    alert(
      `Check-in: ${startDate}\nCheck-out: ${endDate}\nAdults: ${adults}\nChildren: ${children}\nTotal Days: ${totalDays}`
    );
  };

  const handleAdultsChange = (increment) => {
    setAdults((prev) => Math.max(1, prev + increment));
  };

  const handleChildrenChange = (increment) => {
    const newChildren = Math.max(0, children + increment);
    setChildren(newChildren);
    setChildAges((prev) => {
      if (newChildren > prev.length) {
        return [...prev, ""];
      } else {
        return prev.slice(0, newChildren);
      }
    });
  };

  const handleChildAgeChange = (index, age) => {
    setChildAges((prev) => {
      const newAges = [...prev];
      newAges[index] = age;
      return newAges;
    });
  };

  return (
    <Container className=" d-flex justify-content-center">
      <style>{`
      .custom-datepicker {
        width: 100%;
      }
      
      .react-datepicker-wrapper {
        width: 100%;
      }
      
      .react-datepicker__input-container {
        width: 100%;
      }
      
      .react-datepicker-popper {
        z-index: 2; /* Ensure the popper appears above other elements */
      }
      
        @media (max-width: 767.98px) {
            .custom-width {
              width: 100% !important;
            }
          }
          
          @media (min-width: 768px) {
            .custom-width {
              width: 75% !important;
            }
          }
          
        `}</style>
      <Row className="align-items-center bg-light p-2 border rounded custom-width">
        <Col sm={12} lg={6} xl={3}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            placeholderText="Check-in"
            className="form-control custom-datepicker mb-2"
          />
        </Col>
        <Col sm={12} lg={6} xl={3}>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Check-out"
            className="form-control custom-datepicker mb-2"
          />
        </Col>
        <Col sm={12} lg={6} xl={3}>
          <Dropdown
            show={dropdownVisible}
            onToggle={() => setDropdownVisible(!dropdownVisible)}
          >
            <Dropdown.Toggle variant="light" className="border w-100 mb-2">
              {adults} Adult{adults > 1 ? "s" : ""}, {children} Child
              {children !== 1 ? "ren" : ""}
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-3 w-100">
              <Row className="align-items-center mb-2 ">
                <Col xs={3}>Adult</Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleAdultsChange(-1)}
                    disabled={adults === 1}
                  >
                    -
                  </Button>
                </Col>
                <Col xs={3} className="text-center">
                  {adults}
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleAdultsChange(1)}
                  >
                    +
                  </Button>
                </Col>
              </Row>
              <Row className="align-items-center mb-2">
                <Col xs={3}>Child</Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleChildrenChange(-1)}
                    disabled={children === 0}
                  >
                    -
                  </Button>
                </Col>
                <Col xs={3} className="text-center">
                  {children}
                </Col>
                <Col xs={3} className="text-center">
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleChildrenChange(1)}
                  >
                    +
                  </Button>
                </Col>
              </Row>
              {children > 0 && (
                <div>
                  <p className="mb-2">
                    What is the age of the child{children > 1 ? "ren" : ""}{" "}
                    you're travelling with?
                  </p>
                  {[...Array(children)].map((_, index) => (
                    <Form.Control
                      as="select"
                      className="mb-2"
                      key={index}
                      value={childAges[index]}
                      onChange={(e) =>
                        handleChildAgeChange(index, e.target.value)
                      }
                    >
                      <option value="">Select Age</option>
                      {[...Array(18)].map((_, age) => (
                        <option key={age} value={age}>
                          {age}
                        </option>
                      ))}
                    </Form.Control>
                  ))}
                </div>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col sm={12} lg={6} xl={3}>
          <Button onClick={handleCheckAvailability} className="w-100">
            Check Availability
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
