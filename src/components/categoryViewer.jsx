import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./categoryViewer.css";
import H3 from "./h3-header";
import Button from "./button";

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

  return (
    <div className="slider-container container my-5 text-center">
      <H3 title={props.topic} />
      <div className="container my-4" style={{ width: "90%" }}>
        <p style={{ fontWeight: "500", color: "#05062d" }}>
          {props.description}
        </p>
        <a href="" style={{display: props.needToGo ? 'block' : 'none',color:'#05062d'}}>{props.needToGo}</a>
      </div>
      <Slider {...settings}>
        {props.array.map((data, index) => (
          <div key={index}>
            <img src={data.img} alt={data.name} className="img" />
            <div className="d-flex fw-bold text-white justify-content-end mx-3 position-relative text">
              <p className="text-decoration-underline">{data.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="d-flex justify-content-center mt-5">
        <Button content="Find out more" />
      </div>
    </div>
  );
}

export default Responsive;
