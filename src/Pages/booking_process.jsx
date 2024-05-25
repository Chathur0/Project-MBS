import React, { useState } from "react";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import CheckAvailability from "../components/checkAvailability";
import RoomViewer from "../components/RoomViewer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
export default function BookingProcess() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  function setInterface(number) {
    if (number === 1) {
      setCurrentStep(1);
    } else if (number === 2) {
      setCurrentStep(2);
    } else {
      setCurrentStep(3);
    }
  }
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
  };
  return (
    <div>
      <style>{`
      .step-dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: lightgray;
      }
      
      .step-dot.active {
        background-color: #05062d;
      }
      
      .step-line {
        width: 90%;
        height: 2px;
        background-color: lightgray;
      }
      
      .step-line.active {
        background-color: #05062d;
      }  
      .btn-custom{
        color: white;
        font-weight: 900;
        background-color: #3f7b48;
    }
    .btn-custom1{
      color: white;
      font-weight: 900;
      background-color: #3f7b48;
  }
    .btn-custom:hover{
        color: #3f7b48;
        background-color: white;
        border: 2px solid #3f7b48;
    }  
    .wrapper{
      position: "relative";
      overflow: "hidden";
      display: "inline-block";
      
    }
    .wrapper:hover{
      cursor: "pointer";
      color: #3f7b48;
        background-color: white;
        border: 2px solid #3f7b48;
    }
    .selected {
      border: 2px solid #05062d;
      cursor: pointer;
    } 
    .no-selected {
      border: 1px solid rgb(182, 182, 182);
      cursor: pointer; 
    }
      `}</style>
      <Nav />
      <div className="container text-center">
        <h2
          className="mt-5 fw-bolder"
          style={{ color: "#05062d", letterSpacing: "0.5em" }}
        >
          BOOKING PROCESS
        </h2>
        <div className="d-flex align-items-center justify-content-center mt-5 mb-4 row text-center ">
          <div className="d-flex align-items-center col-3 gap-3 ">
            <div
              className={`step-dot ${currentStep >= 1 ? "active" : ""}`}
              onClick={() => {
                setInterface(1);
              }}
            ></div>
            <div
              className={`step-line ${currentStep >= 2 ? "active" : ""}`}
            ></div>
          </div>
          <div className="d-flex align-items-center col-3 gap-3">
            <div
              className={`step-dot ${currentStep >= 2 ? "active" : ""}`}
              onClick={() => {
                setInterface(2);
              }}
            ></div>
            <div
              className={`step-line ${currentStep >= 3 ? "active" : ""} `}
            ></div>
          </div>
          <div className="d-flex align-items-center col-1">
            <div
              className={`step-dot ${currentStep === 3 ? "active" : ""}`}
              onClick={() => {
                setInterface(3);
              }}
            ></div>
          </div>
        </div>
        {currentStep === 1 && (
          <div className="mb-5">
            <h3 className="mt-5 fw-bolder" style={{ color: "#05062d" }}>
              Confirm Room & Days
            </h3>
            <div className="mt-5">
              <CheckAvailability />
            </div>
            <div className="mt-5">
              <RoomViewer />
            </div>
            <div className="mt-5">
              <p className="fw-semibold" style={{ color: "#05062d" }}>
                Total days : 1
              </p>
              <p className="fw-semibold" style={{ color: "#05062d" }}>
                Total Payment : 1 x 15000 = 15000 LKR
              </p>
            </div>
            <div className="mt-3 w-100">
              <button
                onClick={handleNext}
                className="btn btn-custom w-100"
                style={{ padding: "5px 0 5px 0" }}
              >
                CONFIRM
              </button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h3 className="mt-5 fw-bolder" style={{ color: "#05062d" }}>
              Select Package
            </h3>
            <div className="container border rounded-2 mt-5">
              <div className="row">
                <div className="col-12 col-md-3 ">
                  <div
                    className={`my-2 rounded-4 bg-light ${
                      selectedPackage === "RO" ? "selected" : "no-selected"
                    }`}
                    onClick={() => handlePackageSelect("RO")}
                  >
                    <h3 className="fw-bold" style={{ color: "#05062d" }}>
                      RO
                    </h3>
                    <div>
                      <p className="fw-semibold" style={{ color: "#05062d" }}>
                        Room Only
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="package"
                      id=""
                      checked={selectedPackage === "RO"}
                      onChange={() => handlePackageSelect("RO")}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-3 ">
                  <div
                    className={`my-2 rounded-4 bg-light ${
                      selectedPackage === "BB" ? "selected" : "no-selected"
                    }`}
                    onClick={() => handlePackageSelect("BB")}
                  >
                    <h3 className="fw-bold" style={{ color: "#05062d" }}>
                      BB
                    </h3>
                    <div>
                      <p className="fw-semibold" style={{ color: "#05062d" }}>
                        Room + Breakfast
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="package"
                      id=""
                      checked={selectedPackage === "BB"}
                      onChange={() => handlePackageSelect("BB")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3 ">
                  <div
                    className={`my-2 rounded-4 bg-light ${
                      selectedPackage === "HB" ? "selected" : "no-selected"
                    }`}
                    onClick={() => handlePackageSelect("HB")}
                  >
                    <h3 className="fw-bold" style={{ color: "#05062d" }}>
                      HB
                    </h3>
                    <div>
                      <p className="fw-semibold" style={{ color: "#05062d" }}>
                        Room + Breakfast + Dinner
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="package"
                      id=""
                      checked={selectedPackage === "HB"}
                      onChange={() => handlePackageSelect("HB")}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3 ">
                  <div
                    className={`my-2 rounded-4 bg-light ${
                      selectedPackage === "FB" ? "selected" : "no-selected"
                    }`}
                    onClick={() => handlePackageSelect("FB")}
                  >
                    <h3 className="fw-bold" style={{ color: "#05062d" }}>
                      FB
                    </h3>
                    <div>
                      <p className="fw-semibold" style={{ color: "#05062d" }}>
                        Room + Breakfast + Lunch + Dinner
                      </p>
                    </div>
                    <input
                      type="radio"
                      name="package"
                      id=""
                      checked={selectedPackage === "FB"}
                      onChange={() => handlePackageSelect("FB")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <div className="text-start border rounded-2 bg-light p-5">
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Family Room nm 01
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Total days : 1
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Occupancy : 2 Adult, 1 child(age above 6), 1 child(age below
                  6)
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  one day cost for room : 15000 LKR
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  one day cost for foods : (2 x 500) + (1/2 x 500) + (0 x 500) =
                  1250 LKR
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Total cost for a day : 15000 + 1250 = 16250 LKR
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Total Payment : 1 x 16250 = 16250 LKR
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-5 container gap-2">
              <button
                onClick={handleBack}
                className="btn btn-custom mt-3 col-6"
              >
                BACK
              </button>
              <button
                onClick={handleNext}
                className="btn btn-custom mt-3 col-6"
              >
                CONFIRM
              </button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h3 className="mt-5 fw-bolder" style={{ color: "#05062d" }}>
              Guideline for Payment
            </h3>
            <div className="text-start container">
              <h5 className="mt-5 fw-bolder " style={{ color: "#05062d" }}>
                Thank you for booking with us! Here's a step-by-step guide to
                complete your payment.
              </h5>
              <ol className="fw-semibold container">
                <p className="fw-bold">
                  <li>Payment Steps:</li>
                </p>
                <ul className="fw-semibold">
                  <li>Click on the "Proceed to Payment" button.</li>
                  <li>
                    You will be redirected to the Nalanda Foundation website to
                    complete your payment.
                  </li>
                  <li>
                    Follow the instructions on the Nalanda Foundation website to
                    make your payment. This payment should includes the total
                    amount for your room booking.
                  </li>
                  <li>
                    Once your payment is successful, you will see a "Thank You"
                    message on the Nalanda Foundation website confirming your
                    payment.
                  </li>
                </ul>
                <p className="fw-bold">
                  <li>Confirmation Slip:</li>
                </p>
                <ul className="fw-semibold">
                  <li>
                    Take a screenshot of the "Thank You" message displayed after
                    your payment is successful on the Nalanda Foundation
                    website. This will serve as your confirmation slip.
                  </li>
                  <li>
                    Alternatively, if your bank provides a confirmation message
                    after the transaction, you can take a screenshot of that
                    message as well.
                  </li>
                </ul>
                <p className="fw-bold">
                  <li>Returning to Our Website:</li>
                </p>
                <ul className="fw-semibold">
                  <li>
                    After obtaining the confirmation slip, return to our
                    website.
                  </li>
                  <li>
                    Upload the confirmation slip by following the instructions
                    provided below.
                  </li>
                  <li>
                    This step confirms your payment and completes your room
                    booking process.
                  </li>
                </ul>
                <p className="fw-bold">
                  <li>Completion:</li>
                </p>
                <ul>
                  <li>
                    Once you've uploaded the confirmation slip, your booking
                    process is complete.
                  </li>
                  <li>
                    You'll receive a confirmation email shortly after, detailing
                    your room booking and payment.
                  </li>
                </ul>
                <p className="fw-bold">
                  <li>Need Help?</li>
                </p>
                <ul>
                  <li>
                    If you encounter any issues during the payment process or
                    have any questions, feel free to contact our support team
                    for assistance. We're here to help!
                  </li>
                  <li>
                    Contact us <b>+94 71 45 68 584</b>
                  </li>
                </ul>
              </ol>
              <h5 className="mt-5 fw-bolder " style={{ color: "#05062d" }}>
                Know that your contribution to the Nalanda Foundation goes
                towards supporting students at IUHS campus, enabling them to
                pursue their education. IHUS Campus
              </h5>
            </div>
            <div className="text-start mt-5 d-flex align-items-center gap-3">
              <div>
                <button className="btn btn-custom ">Proceed to Payment</button>
              </div>
              <div className="d-flex">
                <button className="btn btn-custom1 d-flex align-items-center gap-2" >
                  <FontAwesomeIcon icon={faFileArrowUp} />
                  Upload Your Slip Here
                </button>
                <input type="file" name="upload" style={{position:"relative",top:"5px",left:"-210px",opacity:"0"}}/>
              </div>
            </div>
            <div className="row mt-5 mb-5 d-flex align-items-center">
              <div className="col-12 col-md-8 d-flex align-items-center gap-3">
                <input type="checkbox" name="" id="" />
                <div className="fw-semibold" style={{ color: "#05062d" }}>
                  I have read and understand the payment process steps outlined
                  above.
                </div>
              </div>

              <div className="col-12 col-md-4 text-md-end text-center mt-2 mt-md-0">
                <button className="btn btn-custom ">Confirm Payment</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
