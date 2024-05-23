import React from "react";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import Ai1 from "/accommodation-images/si.jpg";
import Ai2 from "/accommodation-images/do.jpg";
import Ai3 from "/accommodation-images/tr.jpg";
import Ai4 from "/accommodation-images/fa.jpg";
import Button from "../components/button";
import { Link } from "react-router-dom";

export default function accommodation() {
  return (
    <div>
      <style>{`.textContainerWithShadow{
    text-shadow: -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black, 1px 1px 2px black;
    top: -30px;
}
@media (max-width: 768px) {
    .textContainerWithShadow {
      top:-70px;
    }
  }`}</style>
      <Nav />
      <div className="container text-center mb-5">
        <h6 className="mt-5 mb-5">A PEACEFUL AND BEAUTIFUL STAY</h6>
        <h3 className="mt-2 mb-2 fw-bolder" style={{ color: "#05062d" }}>
          ACCOMMODATION
        </h3>
        <p className="fw-semibold">
          Welcome to our peaceful Accommodation in Galle, where tranquility and
          comfort await you. Nestled amidst the beauty of nature, our
          accommodation offers breathtaking views of tea gardens, cinnamon
          groves, and majestic mountains. Listen to the soothing melodies of
          chirping birds as you unwind in our cozy rooms. Conveniently located
          near the beach and popular attractions, our place promises a serene
          getaway amidst the wonders of Galle. Experience relaxation and natural
          beauty at its finest with us.
        </p>
        <h3 style={{ fontWeight: "700", color: "#05062d", marginTop: "70px" }}>
          ROOMS
        </h3>
        <p className="fw-semibold mb-5">
          Let your slip away and enjoy a blissful night of sleep
        </p>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={Ai1}
                alt=""
                className="w-100"
                style={{ height: "450px" }}
              />
              <div className="container position-relative text-white textContainerWithShadow">
                <div className="row">
                  <p className="col-md-6 fw-bold d-flex justify-content-md-start justify-content-center col-12">
                    SINGLE ROOM
                  </p>
                  <p className="text-decoration-underline col-md-6 fw-bold d-flex justify-content-md-end justify-content-center col-12">
                    FIND OUT MORE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={Ai2}
                alt=""
                className="w-100"
                style={{ height: "450px" }}
              />
              <div className="container position-relative text-white textContainerWithShadow">
                <div className="row">
                  <p className="col-md-6 fw-bold d-flex justify-content-md-start justify-content-center col-12">
                    DOUBLE ROOM
                  </p>
                  <p className="text-decoration-underline col-md-6 fw-bold d-flex justify-content-md-end justify-content-center col-12">
                    FIND OUT MORE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={Ai3}
                alt=""
                className="w-100"
                style={{ height: "450px" }}
              />
              <div className="container position-relative text-white textContainerWithShadow">
                <div className="row">
                  <p className="col-md-6 fw-bold d-flex justify-content-md-start justify-content-center col-12">
                    TRIPLE ROOM
                  </p>
                  <p className="text-decoration-underline col-md-6 fw-bold d-flex justify-content-md-end justify-content-center col-12">
                    FIND OUT MORE
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={Ai4}
                alt=""
                className="w-100"
                style={{ height: "450px" }}
              />
              <div className="container position-relative text-white textContainerWithShadow">
                <div className="row">
                  <p className="col-md-6 fw-bold d-flex justify-content-md-start justify-content-center col-12">
                    FAMILY ROOM
                  </p>
                  <p className="text-decoration-underline col-md-6 fw-bold d-flex justify-content-md-end justify-content-center col-12">
                    FIND OUT MORE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/nearby_places_to_visit">
          <Button content="Attractions Near Us" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
