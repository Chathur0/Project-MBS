import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import occupancy from "/icons/occupancy.png";
import price from "/icons/best-price.png";
import area from "/icons/wide.png";
import BookingForm from "../components/checkAvailability";
import Carousel from "../components/Carousel";
import { BookingContext } from "../context/BookingContext";

import OccupancyAlert from "../components/OccupancyAlert";
const policy = {
  single_room: {
    policy:
      "Our single rooms provide a serene and comfortable space for solo travelers. Equipped with a cozy single bed and modern amenities, these rooms offer everything you need for a restful stay. Perfect for business trips or solo adventures, our single rooms ensure privacy and relaxation in a compact yet well-appointed setting. Check-in is at 7:00 AM and check-out is at 7:00 AM the following day. Early check-ins prior to 7:00 AM must be booked and paid for the previous day. During peak occupancy periods, early departures will be subject to a 100% charge, and late departures incur a 50% charge until 7:00 PM. Departures after 7:00 PM will require a full day's payment.",
  },
  double_room: {
    policy:
      "Our double rooms are designed to accommodate two guests, featuring either one double bed or two single beds. These rooms offer ample space and modern conveniences, making them ideal for couples or friends traveling together. Enjoy a restful night's sleep and a comfortable stay in a welcoming environment. Check-in is at 7:00 AM and check-out is at 7:00 AM the following day. Early check-ins prior to 7:00 AM must be booked and paid for the previous day. During peak occupancy periods, early departures will be subject to a 100% charge, and late departures incur a 50% charge until 7:00 PM. Departures after 7:00 PM will require a full day's payment.",
  },
  triple_room: {
    policy:
      "Our triple rooms are perfect for small groups or families, offering a practical and spacious solution. Typically furnished with one double bed and one single bed, or three single beds, these rooms provide plenty of space for everyone. With modern amenities and a comfortable layout, our triple rooms ensure a pleasant stay for all guests. Check-in is at 7:00 AM and check-out is at 7:00 AM the following day. Early check-ins prior to 7:00 AM must be booked and paid for the previous day. During peak occupancy periods, early departures will be subject to a 100% charge, and late departures incur a 50% charge until 7:00 PM. Departures after 7:00 PM will require a full day's payment.",
  },
  family_room: {
    policy:
      "Family rooms can accommodate a maximum of 5 adults per room or 3 adults & 2 children (under 12 years). Children under 12 will not be charged for sharing the same room. Children aged 6 to 12 will be charged 50% for all meals & children below 6 can dine free of charge. Check-in 7.00 AM Check-out next day 7.00 AM All check-ins prior to 7.00 AM. Should be booked and paid for the previous day. During peak occupancy periods, all early departures will also be subjected to a 100% charge and late departures incur a 50% charge until 7.00 PM. A full day’s payment will be required for all departures after 7.00 PM.",
  },
};
export default function RoomDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { type, roomId } = useParams();
  const roomPol = policy[type];
  const [roomDetails, setRoomDetails] = useState({
    roomNumber: "",
    roomType: "",
    area: "",
    capacity: "",
    pricePerDay: "",
    description: "",
    view: "",
  });
  const [headlines, setHeadlines] = useState([""]);
  const [technologies, setTechnologies] = useState([""]);
  const [services, setServices] = useState([""]);
  const [beds, setBeds] = useState([""]);
  const [baths, setBaths] = useState([""]);
  const [images, setImages] = useState([]);
  const [capacityAdult, setCapacityAdult] = useState(0);
  const [capacityChild, setCapacityChild] = useState(0);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/accommodation/getRoom/${roomId}`)
      .then((response) => {
        if (response.data.Status === "Success") {
          const data = response.data.data;
          setRoomDetails({
            roomNumber: `${
              data.type.charAt(0).toUpperCase() + data.type.slice(1)
            } nm ${data.r_name}`,
            roomType: data.type,
            area: data.area,
            capacity: `${JSON.parse(data.capacity).Adult} Adult & ${
              JSON.parse(data.capacity).Child
            } Child`,
            pricePerDay: data.price,
            description: data.r_discription,
            view: data.view,
          });
          setCapacityAdult(JSON.parse(data.capacity).Adult);
          setCapacityChild(JSON.parse(data.capacity).Child);
          setHeadlines(JSON.parse(JSON.parse(data.r_highlight)));
          setTechnologies(JSON.parse(JSON.parse(data.technology)));
          setServices(JSON.parse(JSON.parse(data.services)));
          setBeds(JSON.parse(JSON.parse(data.bed_details)));
          setBaths(JSON.parse(JSON.parse(data.bath_details)));
          const imagePaths = JSON.parse(data.image).map(
            (img) => `http://localhost:3000/A_images/${img}`
          );
          setImages(imagePaths);
        } else {
          console.error("Failed to fetch room details:", response.data.Message);
        }
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [roomId]);

  const imagesArray = images.map((url) => ({ image: url }));

  //...........................................................................
  const navigate = useNavigate();
  const { startDate, endDate, adults, childrenCount, childAges, totalDays } =
    useContext(BookingContext);
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
  return (
    <div>
      <style>{`
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
      `}</style>
      <Nav />
      <div className="container text-center mt-5 mb-5">
        <h3 className="mt-2 mb-2 fw-bolder" style={{ color: "#05062d" }}>
          {roomDetails.roomNumber}
        </h3>
        <p className="fw-semibold mt-5">{roomDetails.description}</p>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center gap-2 align-items-center">
            <img src={area} alt="" width={50} height={50} />
            <div className="d-inline-block" style={{ color: "#05062d" }}>
              <h3>{roomDetails.area}</h3>
              <p>SQFT</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center gap-2 align-items-center mt-md-3 mt-xl-0">
            <img src={occupancy} alt="" width={50} height={50} />
            <div className="d-inline-block" style={{ color: "#05062d" }}>
              <h5>OCCUPANCY</h5>
              <h4 className="fw-bold">{roomDetails.capacity}</h4>
            </div>
          </div>
          <div className="col-12 col-xl-4 d-flex justify-content-center gap-2 align-items-center mt-3 mt-xl-0">
            <img src={price} alt="" width={50} height={50} />
            <div className="d-inline-block" style={{ color: "#05062d" }}>
              <h5>PRICE PER DAY</h5>
              <h4 className="fw-bold">{roomDetails.pricePerDay}</h4>
            </div>
            <div className="d-flex align-items-center">
              <h3>LKR</h3>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-5 mb-3">
            <BookingForm handleCheckAvailability={handleCheckAvailability} />
          </div>
          {adults > capacityAdult || childrenCount > capacityChild ? (
            <OccupancyAlert/>
          ) : (
            <div>
              <Carousel details={imagesArray} />
              <div className="border mt-5 rounded-3 bg-light" data-aos="fade-up">
                <h3
                  className="mt-5 mb-4 fw-bolder text-start ps-5"
                  style={{ color: "#05062d" }}
                >
                  ROOM HIGHLIGHTS
                </h3>
                <div className="container">
                  <div className="row mb-5" style={{ color: "#05062d" }}>
                    {headlines.map((data) => {
                      return (
                        <div className="col-12 col-md-6 text-start fw-semibold ps-5">
                          {data}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <h5
                  className="mt-5  fw-bolder text-start ps-5"
                  style={{ color: "#05062d" }}
                >
                  VIEW
                </h5>
                <p className=" fw-semibold text-start ps-5">
                  {roomDetails.view}
                </p>
              </div>
              <div className="border mt-4 rounded-3 bg-light" data-aos="fade-up">
                <h3
                  className="mt-5 mb-4 fw-bolder text-start ps-5"
                  style={{ color: "#05062d" }}
                >
                  TECHNOLOGY
                </h3>
                <div className="container">
                  <div className="row mb-5" style={{ color: "#05062d" }}>
                    {technologies.map((data) => {
                      return (
                        <div className="col-12 col-md-6 text-start fw-semibold ps-5">
                          {data}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="border mt-4 rounded-3 bg-light" data-aos="fade-up">
                <h3
                  className="mt-5 mb-4 fw-bolder text-start ps-5"
                  style={{ color: "#05062d" }}
                >
                  SERVICES
                </h3>
                <div className="container">
                  <div className="row mb-5" style={{ color: "#05062d" }}>
                    {services.map((data) => {
                      return (
                        <div className="col-12 col-md-6 text-start fw-semibold ps-5">
                          {data}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="border container mt-4 rounded-3 bg-light" data-aos="fade-up">
                <div className="row mb-5" style={{ color: "#05062d" }}>
                  <div className="col-12 col-md-6 text-start ps-5">
                    <h3
                      className="mt-5 mb-4 fw-bolder text-start"
                      style={{ color: "#05062d" }}
                    >
                      BED
                    </h3>
                    {beds.map((data) => {
                      return <div className="w-100 fw-semibold">{data}</div>;
                    })}
                  </div>
                  <div className="col-12 col-md-6 text-start ps-5">
                    <h3
                      className="mt-5 mb-4 fw-bolder text-start"
                      style={{ color: "#05062d" }}
                    >
                      BATH
                    </h3>
                    {baths.map((data) => {
                      return <div className="w-100 fw-semibold">{data}</div>;
                    })}
                  </div>
                </div>
              </div>
              <div className="" data-aos="fade-up">
              <h3 className="mt-5 mb-4 fw-bolder " style={{ color: "#05062d" }}>
                Accommodation Policy
              </h3>
              <p className="fw-semibold mb-5" style={{ color: "#05062d" }}>
                {roomPol.policy}
              </p>

              </div>
              <button
                className="btn btn-custom"
                onClick={() => navigate(`/booking-process/${type}/${roomId}`)}
              >
                BOOK NOW
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
