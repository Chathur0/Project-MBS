import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./button";
import { Link } from "react-router-dom";

function Responsive(props) {
  let totalView = props.array.length;
  let condition = true;
  if (totalView == 3) {
    condition = false;
  }
  var settings = {
    dots: condition,
    infinite: condition,
    speed: 500,
    slidesToShow: 3,
    autoplay: condition,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    initialSlide: 0,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: condition,
          dots: condition,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
const type = props.type;
  return (
    <div className="slider-container container my-5 text-center">
      <style>
        {`.img {
    width: 100%;
    height: 35vh;
}
.text{
    top: -40px;
    text-shadow: -2px -2px 5px black, 2px -2px 5px black, -2px 2px 5px black, 2px 2px 5px black;
}
.slick-slide > div{
    margin: 0 10px;
}
.slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid #05062d;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .slick-dots li.slick-active button {
    width: auto;
    height: auto;
    width: 12px;
    height: 12px;
    border-radius: 20px;
    background: #05062d;
    box-shadow: -2px -2px 5px #05062d, 2px -2px 5px #05062d, -2px 2px 5px #05062d, 2px 2px 5px #05062d;
    color: white;
    margin-right: 10px;
    
  }
  
  @media (max-width: 1024px) {
    .img {
      height: 20vh;
    }
  }

  @media (max-width: 600px) {
    .img {
      height: 25vh;
    }
  }`}
      </style>
      <h3 style={{ fontWeight: "700", color: "#05062d" }}>{props.topic}</h3>
      <div className="container my-4" style={{ width: "90%" }}>
        <p
          style={{ fontWeight: "500", color: "#05062d" }}
          className="fw-semibold"
        >
          {props.description}
        </p>
        <a
          href=""
          style={{
            display: props.needToGo ? "block" : "none",
            color: "#05062d",
          }}
        >
          {props.needToGo}
        </a>
      </div>
      <Slider {...settings}>
        {props.array.map((data, index) => (
          <div key={index}>
            <img src={data.img} alt={data.name} className="img" />
            <div className="d-flex fw-bold text-white justify-content-end mx-3 position-relative text">
              <Link to={`${type}/${data.to}`} className="text-decoration-underline text-white">{data.name}</Link>
            </div>
          </div>
        ))}
      </Slider>
      <div className="d-flex justify-content-center mt-5">
        <Link to={`/${props.topic}`}>
          <Button content="Find out more" />
        </Link>
      </div>
    </div>
  );
}

export default Responsive;
