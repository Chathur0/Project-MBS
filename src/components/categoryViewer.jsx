import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "/accommodation-images/si.jpg";
import i2 from "/accommodation-images/do.jpg";
import i3 from "/accommodation-images/tr.jpg";
import i4 from "/accommodation-images/fa.jpg";
import "./categoryViewer.css";
import H3 from "./h3-header";

function Responsive() {
  const Accommodation = [
    { img: i1, name: "SINGLE ROOM" },
    { img: i2, name: "DOUBLE ROOM" },
    { img: i3, name: "TRIPLE ROOM" },
    //  { img: i4, name: "FAMILY ROOM" },
  ];
  let totalView = Accommodation.length;

  const [autoplay, setAutoplay] = useState(getAutoplaySetting());

  useEffect(() => {
    const handleResize = () => {
      setAutoplay(getAutoplaySetting());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getAutoplaySetting() {
    console.log("hi");
    if (totalView == 3) {
      return window.innerWidth < 992;
    }
    return true;
  }

  var settings = {
    dots: autoplay,
    infinite: autoplay,
    speed: 500,
    slidesToShow: 3,
    autoplay: autoplay,
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
          infinite: autoplay,
          dots: autoplay,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
      <div className="slider-container container my-5 text-center">
        <H3 title="ACCOMMODATION" />
        <div className="container my-4" style={{ width: "90%" }}>
          <p style={{ fontWeight: "500", color: "#05062d" }}>
            We offer various room types with excellent service at affordable
            rates. Enjoy your stay without breaking the bank and make the most
            of your leisure time here. Additionally, all volunteer guests can
            stay for free, inclusive of meals.
          </p>
        </div>
        <Slider {...settings}>
          {Accommodation.map((data, index) => (
            <div key={index}>
              <img src={data.img} alt={data.name} className="img" />
              <div className="d-flex fw-bold text-white justify-content-between mx-3 position-relative text">
                <p>{data.name}</p>
                <p className="text-decoration-underline">FIND MORE</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    
  );
}

export default Responsive;
