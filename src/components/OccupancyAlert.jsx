import React from "react";
import Error from "/icons/Error.mp4";
import Contact from "/icons/Contact.mp4";
export default function OccupancyAlert() {
  return (
    <div>
      <div className="container d-flex justify-content-center flex-column mt-5 mb-4">
        <div className="row d-flex justify-content-center">
          <h3 style={{ color: "#05062d" }} className="fw-bold">
            Occupancy Limit Exceeded..
          </h3>
          <video src={Error} autoPlay loop className="col-11 col-md-6"></video>
          <h5
            className="text-center mt-4"
            style={{ color: "#05062d" }}
            data-aos="fade-up"
          >
            We're sorry, but it appears you have selected an occupancy that
            exceeds the capacity for this room type. To ensure a comfortable and
            safe stay for all guests, we must adhere to the maximum occupancy
            limits set for each room.
            <br />
            <br />
            For more details and to discuss your specific needs, please feel
            free to contact us. Our team is here to assist you and will do their
            best to accommodate your request. You may be able to book the room
            by making special arrangements through our customer service. <br />
            <br />
            Thank you for your understanding and cooperation.
          </h5>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <video src={Contact} autoPlay loop className="w-100"></video>
          </div>
          <div className="col-4 d-flex">
            <h6
              className="d-flex align-items-center fw-bolder"
              style={{ color: "#05062d" }}
            >
              Contact Us
              <br />
              +94 91-499-8789
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
