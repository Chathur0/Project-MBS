import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import occupancy from "/icons/occupancy.png";
import price from "/icons/best-price.png";
import area from "/icons/wide.png";
import BookingForm from "../components/checkAvailability";
import i1 from "/room-images/i1.jpg";
import i2 from "/room-images/i2.jpg";
import i3 from "/room-images/i3.jpg";
import Carousel from "../components/Carousel";
import Button from '../components/button';
const roomDetailsData = {
  single_room: {
    name: "SINGLE ROOM",
    description: "A comfortable room with basic amenities.",
    rooms: [
      {
        id: "single_room_nm_01",
        name: "Single Room nm 01",
        description: "A cozy single room perfect for solo travelers.",
        image: "/accommodation-images/single_room_nm_01.jpg",
        details: "Details about single room nm 01...",
      },
      {
        id: "single_room_nm_02",
        name: "Single Room nm 02",
        description: "A cozy single room perfect for solo travelers.",
        image: "/accommodation-images/single_room_nm_02.jpg",
        details: "Details about single room nm 02...",
      },
    ],
  },
  double_room: {
    name: "DOUBLE ROOM",
    description: "A luxurious room with premium amenities.",
    rooms: [
      {
        id: "double_room_nm_01",
        name: "Double Room nm 01",
        description: "A luxurious room with two beds.",
        image: "/accommodation-images/double_room_nm_01.jpg",
        details: "Details about double room nm 01...",
      },
      {
        id: "double_room_nm_02",
        name: "Double Room nm 02",
        description: "A luxurious room with two beds.",
        image: "/accommodation-images/double_room_nm_02.jpg",
        details: "Details about double room nm 02...",
      },
    ],
  },
  triple_room: {
    name: "TRIPLE ROOM",
    description: "A spacious room with multiple beds.",
    rooms: [
      {
        id: "triple_room_nm_01",
        name: "Triple Room nm 01",
        description: "A spacious room with three beds.",
        image: "/accommodation-images/triple_room_nm_01.jpg",
        details: "Details about triple room nm 01...",
      },
      {
        id: "triple_room_nm_02",
        name: "Triple Room nm 02",
        description: "A spacious room with three beds.",
        image: "/accommodation-images/triple_room_nm_02.jpg",
        details: "Details about triple room nm 02...",
      },
    ],
  },
  family_room: {
    name: "FAMILY ROOM",
    description: "A spacious room with additional features.",
    rooms: [
      {
        id: "family_room_nm_01",
        name: "Family Room nm 01",
        description: "A large room suitable for families.",
        image: "/accommodation-images/family_room_nm_01.jpg",
        details: "Details about family room nm 01...",
      },
      {
        id: "family_room_nm_02",
        name: "Family Room nm 02",
        description: "A large room suitable for families.",
        image: "/accommodation-images/family_room_nm_02.jpg",
        details: "Details about family room nm 02...",
      },
    ],
  },
};
// const roomDetails = {
//     image: [i1,i2,i3],
//     details : {
//         "name" : "Family Room nm 01",
//         "description" : "Welcome to our Family Room nm 01! This air-conditioned room offers a cozy and comfortable stay for your family. Adorned with beautiful decorations and equipped with the latest technology, it ensures a delightful experience. The room features two double beds along with a single bed, and we can readily provide extra beds upon request. With space for up to 3 adults and 2 children, or more if needed, it's perfect for families of all sizes. Enjoy a relaxing stay with us!",
//         "image" : "/accommodation-images/family_room_nm_01.jpg",
//         "details" : "Details about family room nm 01..."
//     }
// };
// const carousalImages = roomDetails.image.map((img) => ({ image: img }));
// convert array into array object ^
const roomDetails = {
  image: { i1, i2, i3 },
  details: {
    name: "Family Room nm 01",
    description:
      "Welcome to our Family Room nm 01! This air-conditioned room offers a cozy and comfortable stay for your family. Adorned with beautiful decorations and equipped with the latest technology, it ensures a delightful experience. The room features two double beds along with a single bed, and we can readily provide extra beds upon request. With space for up to 3 adults and 2 children, or more if needed, it's perfect for families of all sizes. Enjoy a relaxing stay with us!",
    area: "255",
    occupancy: "2 ADULTS 1 CHILD",
    price: "10000 LKR",
    headline: [
      "Tea & Coffee maker",
      "Complimentary mineral water",
      "Spacious, brightly lit closets",
      "In-room digital safe",
      "Hair dryer",
      "Electric shaver outlet",
      "Digital weighing scale",
      "Writing desk & chair",
      "Daily house-keeping",
      "Ironing board & iron",
      "Shoe shine kit",
      "Washing mashing",
    ],
    view: "View of the beautiful rubber estate",
    technology: [
      "Complimentary Wi-Fi",
      "40-inch LCD Tv",
      "On demand movies and Satellite Tv options",
      "Clock radio",
      "Bedside charging stations",
      "IDD telephone",
      "Air conditioning with temperature control",
    ],
    service: [
      "Complimentary local newspaper on request",
      "24-hour in-room dining",
      "24-hour complimentary shoeshine service",
      "Extra-bed on request",
      "Baby crib, on request",
      "Umbrella, on request",
    ],
    bed: ["Organic cotton bedding, feather pillows and fretted linen"],
    bath: [
      "Beautiful white marble bathrooms with a spacious shower cubicle.",
      "Rain shower and Hand shower",
    ],
  },
};
// convert object into array object ^
const carousalImages = Object.values(roomDetails.image).map((img) => ({
  image: img,
}));

export default function RoomDetail() {
  const { type, roomId } = useParams();
  const roomCategory = roomDetailsData[type];
  const room = roomCategory.rooms.find((r) => r.id === roomId);

  if (!room) {
    return <h2>Room not found</h2>;
  }

  return (
    <div>
      <Nav />
      <div className="container text-center mt-5 mb-5">
        <h3 className="mt-2 mb-2 fw-bolder" style={{ color: "#05062d" }}>
          {roomDetails.details.name}
        </h3>
        <p className="fw-semibold mt-5">{roomDetails.details.description}</p>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center gap-2 align-items-center">
            <img src={area} alt="" width={50} height={50} />
            <div className="d-inline-block" style={{ color: "#05062d" }}>
              <h3>{roomDetails.details.area}</h3>
              <p>SQFT</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 d-flex justify-content-center gap-2 align-items-center mt-md-3 mt-xl-0">
            <img src={occupancy} alt="" width={50} height={50} />
            <div className="d-inline-block" style={{ color: "#05062d" }}>
              <h5>OCCUPANCY</h5>
              <h4 className="fw-bold">{roomDetails.details.occupancy}</h4>
            </div>
          </div>
          <div className="col-12 col-xl-4 d-flex justify-content-center gap-2 align-items-center mt-3 mt-xl-0">
            <img src={price} alt="" width={50} height={50} />
            <div className="d-inline-block" style={{ color: "#05062d" }}>
              <h5>PRICE PER DAY</h5>
              <h4 className="fw-bold">{roomDetails.details.price}</h4>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn">
                <h3>$</h3>
              </button>
              <h3>/</h3>
              <button className="btn">
                <h3>LKR</h3>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3">
          <BookingForm />
        </div>
        <Carousel details={carousalImages} />
        <div className="border mt-5 rounded-3 bg-light">
          <h3
            className="mt-5 mb-4 fw-bolder text-start ps-5"
            style={{ color: "#05062d" }}
          >
            ROOM HIGHLIGHTS
          </h3>
          <div className="container">
            <div className="row mb-5" style={{ color: "#05062d" }}>
              {roomDetails.details.headline.map((data) => {
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
            {roomDetails.details.view}
          </p>
        </div>
        <div className="border mt-4 rounded-3 bg-light">
          <h3
            className="mt-5 mb-4 fw-bolder text-start ps-5"
            style={{ color: "#05062d" }}
          >
            TECHNOLOGY
          </h3>
          <div className="container">
            <div className="row mb-5" style={{ color: "#05062d" }}>
              {roomDetails.details.technology.map((data) => {
                return (
                  <div className="col-12 col-md-6 text-start fw-semibold ps-5">
                    {data}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border mt-4 rounded-3 bg-light">
          <h3
            className="mt-5 mb-4 fw-bolder text-start ps-5"
            style={{ color: "#05062d" }}
          >
            SERVICES
          </h3>
          <div className="container">
            <div className="row mb-5" style={{ color: "#05062d" }}>
              {roomDetails.details.service.map((data) => {
                return (
                  <div className="col-12 col-md-6 text-start fw-semibold ps-5">
                    {data}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border container mt-4 rounded-3 bg-light">
          <div className="row mb-5" style={{ color: "#05062d" }}>
            <div className="col-12 col-md-6 text-start ps-5">
              <h3
                className="mt-5 mb-4 fw-bolder text-start"
                style={{ color: "#05062d" }}
              >
                BED
              </h3>
              {roomDetails.details.bed.map((data) => {
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
              {roomDetails.details.bath.map((data) => {
                return <div className="w-100 fw-semibold">{data}</div>;
              })}
            </div>
          </div>
        </div>
        <h3
          className="mt-5 mb-4 fw-bolder "
          style={{ color: "#05062d" }}
        >
          Accommodation Policy
        </h3>
        <p className="fw-semibold mb-5" style={{ color: "#05062d" }}>
          Family rooms can accommodate a maximum of 5 adults per room or 3
          adults & 2 children (under 12 years). Children under 12 will not be
          charged for sharing the same room. Children aged 6 to 12 will be
          charged 50% for all meals & children below 6 can dine free of charge.
          Check-in 7.00 AM Check-out next day 7.00 AM All check-ins prior to
          7.00 AM. Should be booked and paid for the previous day. During peak
          occupancy periods, all early departures will also be subjected to a
          100% charge and late departures incur a 50% charge until 7.00 PM. A
          full day’s payment will be required for all departures after 7.00 PM{" "}
        </p>
        <Button content="BOOK NOW"/> 
      </div>
      <Footer />
    </div>
  );
}
