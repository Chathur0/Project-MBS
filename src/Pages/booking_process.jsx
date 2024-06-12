import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import CheckAvailability from "../components/checkAvailability";
import RoomViewer from "../components/RoomViewer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BookingContext } from "../context/BookingContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Warning from "/icons/info.png";
import Package from "/icons/delivery.png";
import OccupancyAlert from "../components/OccupancyAlert";
import Success from "/icons/Success.mp4";
import Contact from "/icons/ContactUs.mp4";

export default function BookingProcess() {
  const { type, id } = useParams();
  const [user, setUser] = useState({ userId: "", name: "" });
  const navigate = useNavigate();
  const [today, setToday] = useState("");
  const [formattedStartDate, setFormattedStartDate] = useState("");
  const [formattedEndDate, setFormattedEndDate] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
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
            alert("your are not a authorized user");
            navigate('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("your have to log in to the system");
      navigate("/login");
    }
  }, []);

  const [roomDetails, setRoomDetails] = useState({
    roomNumber: "",
    capacity: "",
    pricePerDay: "",
  });
  const [beds, setBeds] = useState("");
  const [images, setImages] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/accommodation/getRoom/${id}`)
      .then((response) => {
        if (response.data.Status === "Success") {
          const data = response.data.data;
          setRoomDetails({
            roomNumber: `${
              data.type.charAt(0).toUpperCase() + data.type.slice(1)
            } nm ${data.r_name}`,
            capacity: `${JSON.parse(data.capacity).Adult} Adult & ${
              JSON.parse(data.capacity).Child
            } Child`,
            pricePerDay: data.price,
          });
          setCapacityAdult(JSON.parse(data.capacity).Adult);
          setCapacityChild(JSON.parse(data.capacity).Child);
          const bedH = JSON.parse(JSON.parse(data.bed_details));
          setBeds(bedH[0]);
          const imagePaths = JSON.parse(data.image).map((img) => img);
          setImages(imagePaths[0]);
        } else {
          console.error("Failed to fetch room details:", response.data.Message);
        }
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [id]);
  const [fileUrl, setFileUrl] = useState(null);
  const handleSlipChange = (event) => {
    const file = event.target.files[0];
    setSelectedSlip(file);
    const url = URL.createObjectURL(file);
    setFileUrl(url);
  };

  const {
    startDate,
    endDate,
    adults,
    childrenCount,
    childAges,
    totalDays,
    selectedPackage,
    handlePackageSelect,
    pkCost,
    currentStep,
    setCurrentStep,
  } = useContext(BookingContext);
  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setToday(formattedDate);
  }, []);

  useEffect(() => {
    const stDate = startDate.toISOString().split("T")[0];
    setFormattedStartDate(stDate);
    if (endDate) {
      const edDate = endDate.toISOString().split("T")[0];
      setFormattedEndDate(edDate);
    }
  }, [startDate, endDate]);

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

  const [ageAboveCount, setAgeAboveCount] = useState(0);
  const [ageBelowCount, setAgeBelowCount] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);
  const [capacityAdult, setCapacityAdult] = useState(0);
  const [capacityChild, setCapacityChild] = useState(0);

  useEffect(() => {
    let aboveCount = 0;
    let belowCount = 0;
    childAges.forEach((age) => {
      if (age > 6) {
        aboveCount++;
      } else {
        belowCount++;
      }
    });

    setAgeAboveCount(aboveCount);
    setAgeBelowCount(belowCount);
  }, [childAges]);

  useEffect(() => {
    setTotalPayments(
      adults * pkCost +
        ageAboveCount * pkCost +
        roomDetails.pricePerDay +
        (ageBelowCount * pkCost) / 2
    );
  }, [adults, pkCost, ageAboveCount, ageBelowCount, roomDetails.pricePerDay]);
  const handleCheckAvailability = () => {
    alert(
      `Check-in: ${startDate.toDateString()}\n` +
        `Check-out: ${endDate ? endDate.toDateString() : "N/A"}\n` +
        `Adults: ${adults}\n` +
        `Children: ${childrenCount}\n` +
        `Total Days: ${totalDays}\n` +
        `Child Ages: ${childAges.join(", ")}`
    );
  };
  const areChildAgesIncomplete = () => {
    return childAges.some(
      (age) => age === null || age === undefined || age === ""
    );
  };
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  const handleImageCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleNavigate = () => {
    localStorage.removeItem("bookingDetails");
    navigate("/accommodation");
  };
  const [isChecked, setIsChecked] = useState(false);
  const [selectedSlip, setSelectedSlip] = useState(null);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleBookingSubmit = async () => {
    const formData = new FormData();
    formData.append("u_id", user.userId);
    formData.append("r_id", id);
    formData.append("package", selectedPackage);
    formData.append("b_date", today);
    formData.append("check_in", formattedStartDate);
    formData.append("check_out", formattedEndDate);
    formData.append("b_cost", totalPayments);
    formData.append("b_slip", selectedSlip);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/book-room",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setBookingSuccess(true);
      setShowMessage(true);
    } catch (error) {
      setShowMessage(true);
      setBookingSuccess(false);
      console.error("There was an error saving the booking:", error);
    }
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
    
    .btn-custom:hover{
        color: #3f7b48;
        background-color: white;
        border: 2px solid #3f7b48;
    }  
    .btn-custom1{
      color: white;
      font-weight: 900;
      background-color: #3f7b48;
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
      <Modal show={showMessage} >
        <Modal.Header >
          <Modal.Title style={{ color: "#05062d" }}>
            {bookingSuccess ? "Thank you!" : "Booking Failed"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center fw-semibold" style={{ color: "#05062d" }}>
            {bookingSuccess ? (
              <div className="w-100 d-flex flex-column">
                <video
                  src={Success}
                  autoPlay
                  className="w-100"
                  style={{ height: "200px" }}
                />
                <p>Your booking is confirmed. We will contact you soon</p>
              </div>
            ) : (
              <div className="w-100 d-flex flex-column">
                <video
                  src={Contact}
                  autoPlay
                  loop
                  className="w-100"
                  style={{ height: "200px" }}
                />
                <p>
                  Oops! Something went wrong. Please try again later. Feel free
                  to contact us for assistance.
                </p>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNavigate}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
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
                if (
                  !startDate ||
                  !endDate ||
                  (childrenCount > 0 && areChildAgesIncomplete())
                ) {
                  setShowModal(true);
                } else {
                  if (adults > capacityAdult || childrenCount > capacityChild) {
                  } else {
                    setInterface(2);
                  }
                }
              }}
            ></div>
            {/* Modal for displaying message */}
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title style={{ color: "#05062d" }}>
                  {currentStep === 1
                    ? "Please provide all fields"
                    : "Please select Package"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  className="text-center fw-semibold"
                  style={{ color: "#05062d" }}
                >
                  <img
                    src={currentStep === 1 ? Warning : Package}
                    alt=""
                    width={100}
                  />
                  {currentStep === 1 ? (
                    <h5>You need to provide all necessary details</h5>
                  ) : (
                    <h5>You need to select a package.</h5>
                  )}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>
            <div
              className={`step-line ${currentStep >= 3 ? "active" : ""} `}
            ></div>
          </div>
          <div className="d-flex align-items-center col-1">
            <div
              className={`step-dot ${currentStep === 3 ? "active" : ""}`}
              onClick={() => {
                if (startDate && endDate && selectedPackage) {
                  setInterface(3);
                } else {
                  setShowModal(true);
                }
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
              <CheckAvailability
                handleCheckAvailability={handleCheckAvailability}
              />
            </div>
            {adults > capacityAdult || childrenCount > capacityChild ? (
              <OccupancyAlert />
            ) : (
              <div>
                <div className="mt-5">
                  <RoomViewer
                    type={type}
                    image={images}
                    name={roomDetails.roomNumber}
                    price={roomDetails.pricePerDay}
                    capacity={roomDetails.capacity}
                    id={id}
                    bed={beds}
                  />
                </div>
                <div className="mt-5">
                  <p className="fw-semibold" style={{ color: "#05062d" }}>
                    {`Total days : ${totalDays}`}
                  </p>
                  <p className="fw-semibold" style={{ color: "#05062d" }}>
                    {`Total Payment : ${totalDays} x ${
                      roomDetails.pricePerDay
                    } = ${roomDetails.pricePerDay * totalDays} LKR`}
                  </p>
                </div>
                <div className="mt-3 w-100">
                  <button
                    onClick={handleNext}
                    className="btn btn-custom w-100"
                    style={{ padding: "5px 0 5px 0" }}
                    disabled={
                      !startDate ||
                      !endDate ||
                      (childrenCount > 0 && areChildAgesIncomplete())
                    }
                  >
                    CONFIRM
                  </button>
                </div>
              </div>
            )}
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
                <h3
                  className="mb-5 fw-bolder text-center"
                  style={{ color: "#05062d" }}
                >
                  Your Bill
                </h3>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  {roomDetails.roomNumber}
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  {`Total days : ${totalDays}`}
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Occupancy :
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  Adult : {adults}
                  <br />
                  Child : {childrenCount}
                  <br />
                  {childrenCount > 0 ? (
                    <div>
                      (age above 6) : {ageAboveCount}
                      <br />
                      (age below 6) : {ageBelowCount}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </p>
                <p className="fw-semibold" style={{ color: "#05062d" }}>
                  {`One day cost for room : ${roomDetails.pricePerDay} LK`}
                </p>
                {pkCost != 0 ? (
                  <div>
                    <p className="fw-semibold" style={{ color: "#05062d" }}>
                      One day cost for foods :
                    </p>
                    <div className="fw-semibold" style={{ color: "#05062d" }}>
                      {`For adult : ${adults} x ${pkCost} = ${
                        adults * pkCost
                      } LKR`}
                      <br />
                      For child :<br />
                      {`(For age above 6) : ${ageAboveCount} x ${pkCost} = ${
                        ageAboveCount * pkCost
                      } LKR`}
                      <br />
                      {`(For age below 6) : ${ageBelowCount} x ${
                        pkCost / 2
                      } = ${(ageBelowCount * pkCost) / 2} LKR`}
                      <br />
                    </div>
                    <p className="fw-semibold" style={{ color: "#05062d" }}>
                      {`Total : ${adults * pkCost} + ${
                        ageAboveCount * pkCost
                      } + ${(ageBelowCount * pkCost) / 2} = ${
                        adults * pkCost +
                        ageAboveCount * pkCost +
                        (ageBelowCount * pkCost) / 2
                      } LKR`}
                    </p>
                  </div>
                ) : (
                  <div className="fw-semibold" style={{ color: "#05062d" }}>
                    No Foods!
                  </div>
                )}
                <div className="fw-semibold" style={{ color: "#05062d" }}>
                  {`Total Payment for day : ${
                    adults * pkCost +
                    ageAboveCount * pkCost +
                    (ageBelowCount * pkCost) / 2
                  } + ${roomDetails.pricePerDay} = ${
                    adults * pkCost +
                    ageAboveCount * pkCost +
                    roomDetails.pricePerDay +
                    (ageBelowCount * pkCost) / 2
                  } LKR`}
                </div>
                <div className="fw-semibold" style={{ color: "#05062d" }}>
                  {`Total Payment  : ${
                    adults * pkCost +
                    ageAboveCount * pkCost +
                    roomDetails.pricePerDay +
                    (ageBelowCount * pkCost) / 2
                  } x ${totalDays} = ${totalPayments} LKR`}
                </div>
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
                disabled={!startDate || !endDate || !selectedPackage}
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
            <div className="text-start container" data-aos="fade-up">
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
                <a
                  href="https://karuna.lk/program/socnf.html"
                  className="btn btn-custom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Proceed to Payment
                </a>
              </div>
              <div className="d-flex">
                <button className="btn btn-custom1 d-flex align-items-center gap-2">
                  <FontAwesomeIcon icon={faFileArrowUp} />
                  Upload Your Slip Here
                </button>
                <input
                  type="file"
                  name="upload"
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "-210px",
                    opacity: "0",
                  }}
                  onChange={handleSlipChange}
                />
              </div>
            </div>
            <div
              className="col-12 mt-5"
              style={{
                width: "100%",
                height: "250px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onClick={handleImageClick}
            >
              {fileUrl ? (
                <img
                  src={fileUrl}
                  alt=""
                  className=""
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: "2",
                  }}
                />
              ) : (
                <p className="text-center text-black">No Slip selected</p>
              )}
            </div>
            <Modal show={isModalOpen} onHide={handleImageCloseModal} centered>
              <Modal.Header closeButton>
                <Modal.Title>Image Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedSlip && selectedSlip.type.startsWith("image/") && (
                  <img
                    src={fileUrl}
                    alt="Selected file"
                    style={{ width: "100%" }}
                  />
                )}
              </Modal.Body>
            </Modal>
            <div className="row mt-5 mb-5 d-flex align-items-center">
              <div className="col-12 col-md-8 d-flex align-items-center gap-3">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <div className="fw-semibold" style={{ color: "#05062d" }}>
                  I have read and understand the payment process steps outlined
                  above.
                </div>
              </div>

              <div className="col-12 col-md-4 text-md-end text-center mt-2 mt-md-0">
                <button
                  className="btn btn-custom "
                  disabled={!isChecked || !selectedSlip}
                  onClick={handleBookingSubmit}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
