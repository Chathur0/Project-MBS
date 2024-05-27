import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import i1 from '/program/calender.jpeg'
import i2 from '/program/meditate.jpeg'
import i3 from '/program/meditate1.jpeg'
import i4 from '/program/meditate2.jpeg'
import i7 from '/program/meditate3.jpeg'
import i8 from '/program/meditate4.jpeg'
import i9 from '/program/meditate5.jpeg'
import y1 from '/program/yoga.jpg'
import y2 from '/program/yoga1.jpg'
import y3 from '/program/yoga3.jpg'
import y4 from '/program/yoga4.jpg'
import y5 from '/program/yoga5.jpg'
import y6 from '/program/yoga6.jpg'
import s1 from '/program/sermon.jpeg'
import s2 from '/program/sermon1.jpeg'
import s3 from '/program/sermon2.jpeg'
import s4 from '/program/sermon3.jpeg'
import s5 from '/program/sermon4.jpeg'
import s6 from '/program/sermon5.jpeg'
import Nav from '../components/navBar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

function App() {

  const settings = {
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const data = [
    {
      name: '20/06/2023',
      img: i2,
      review: 'The deshana about abhidharma',

    },
    {
      name: '21/06/2023',
      img: i3,
      review: 'The deshana about abhidharma',

    },
    {
      name: '22/06/2023',
      img: i4,
      review: 'The deshana about abhidharma',

    },
    {
      name: '23/06/2023',
      img: i7,
      review: 'The deshana about abhidharma',

    },
    {
      name: '24/06/2023',
      img: i8,
      review: 'The deshana about abhidharma',

    },
    {
      name: '25/06/2023',
      img: i9,
      review: 'The deshana about abhidharma',

    },
  ];
  const data1 = [
    {
      name: '20/06/2023',
      img: y1,
      review: 'The deshana about abhidharma',

    },
    {
      name: '21/06/2023',
      img: y3,
      review: 'The deshana about abhidharma',

    },
    {
      name: '22/06/2023',
      img: y4,
      review: 'The deshana about abhidharma',

    },
    {
      name: '23/06/2023',
      img: y5,
      review: 'The deshana about abhidharma',

    },
    {
      name: '24/06/2023',
      img: y6,
      review: 'The deshana about abhidharma',

    },
    {
      name: '25/06/2023',
      img: y2,
      review: 'The deshana about abhidharma',

    },
  ];
  const data2 = [
    {
      name: '20/06/2023',
      img: s1,
      review: 'The deshana about abhidharma',

    },
    {
      name: '21/06/2023',
      img: s2,
      review: 'The deshana about abhidharma',

    },
    {
      name: '22/06/2023',
      img: s3,
      review: 'The deshana about abhidharma',

    },
    {
      name: '23/06/2023',
      img:s4,
      review: 'The deshana about abhidharma',

    },
    {
      name: '24/06/2023',
      img: s5,
      review: 'The deshana about abhidharma',

    },
    {
      name: '25/06/2023',
      img: s6,
      review: 'The deshana about abhidharma',

    },
  ];

  return (
    <div>
      <style>{`
  .root{
    align-items: center;
    padding: auto;
  }
  .container {
  width: 80%;
  margin: auto;
  }
  
  .slider-wrapper {
  margin-top: 2rem;
  }
  
  .slide {
  background-color: gray;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  }
  
  .iframe-container, .image-container {
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  }
  
  .video-frame, .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
  
  .content {
  width: 100%;
  text-align: center;
  }
  
  .date-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  }
  
  .icon {
  color: #2e7d32;
  margin: 0 5px;
  }
  
  .date-text {
  font-size: 1rem;
  font-weight: bold;
  color: black;
  }
  
  .title {
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  }
  
  .review {
  margin-bottom: 1rem;
  font-size: 0.7rem;
  }
  
  .more-info-button {
  background-color: #3f7b48;
  color: white;
  font-size: 0.6rem;
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  }
  
  .mInfoB {
  background-color: #3f7b48;
  color: white;
  font-size: 0.6rem;
  padding: 0.1rem 0.5rem;
  border: none;
  cursor: pointer;
  margin-left: 11px;
  }
  
  .heading1 {
  text-align: center;
  color: #05062d;
  }
  
  .heading2 {
  color: #05062d;
  margin-left: 140px;
  padding-right: 80px;
  }
  .endleft, .endright {
  background-color: #3f7b48;
  color: white;
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  
  transition: background-color 0.3s;
  }
  .endleft:hover, .endright:hover {
  background-color: #2e7d32; /* Darker green on hover */
  }
  /* Responsive adjustments */
  @media (max-width: 1024px) {
  .container {
    width: 90%;
  }
  
  .title, .review {
    font-size: 0.9rem;
  }
  
  .heading2 {
    margin-left: 200px;
  }
  
  .mInfoB {
    font-size: 0.8rem;
    padding: 0.15rem 0.3rem;
    margin-left: 10px;
  }
  
  .endleft {
    margin-left:50px;
  }
  
  .endright {
    margin-left: 350px;
  }
  }
  
  @media (max-width: 768px) {
  .container {
    width: 95%;
  }
  
  .title, .review {
    font-size: 0.8rem;
  }
  
  .more-info-button {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  
  .heading2 {
    margin-left: 100px;
  }
  
  .mInfoB {
    font-size: 1rem;
    padding: 0.2rem 0.4rem;
    margin-left: 10px;
  }
  
  .endleft {
    margin-left: 20px;
  }
  
  .endright {
    margin-left: 300px;
  }
  }
  
  @media (max-width: 480px) {
  .container {
    width: 100%;
  }
  
  .title, .review {
    font-size: 0.7rem;
  }
  
  .more-info-button {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
  
  .heading2 {
    margin-left: 0;
    text-align: center;
  }
  
  .mInfoB {
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    margin-left: 3px;
  }
  
  .endleft, .endright {
    margin-left: 0;
    text-align: center;
    width: 100%;
  }
  }
  
  `}</style>
      <Nav />
      <div className='root'>
        <div className='heading1'>
          <h1>Programs</h1>
        </div>
        <div className='heading2'>
          <p><b>Meditation</b></p>
          <p>Meditation is the deliberate focusing of attention to bring about feelings of calm and heightened energy and awareness. Regular meditation offers many health benefits, such as reduced stress and anxiety. There are many different ways to meditate, such as using a mantra, looking at an object, or focusing on the breath.</p>
        </div>
        <div className="container">
          <div className="slider-wrapper">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="slide">
                  <div className="image-container">
                    <img src={d.img} alt={d.name} className="image" />
                  </div>
                  <div className="content">

                    <button className="more-info-button">Wisdom Sri Lanka</button>

                    <p className="review">{d.review}</p>
                    <div className="date-container">
                      <FaCalendarAlt className="icon" />
                      <span className="date-text">{d.date}</span>
                      <p className="title">{d.name}</p>
                      <FaClock className="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <br />
            <br />
            <Link to="/meditation">
              <button className='mInfoB'>More info</button>
            </Link>
          </div>
        </div>
        <br />
        <div className='heading2'>
          <p><b>Yoga</b></p>
          <p>Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health. Yoga was developed as a spiritual practice thousands of years ago. Today, most Westerners who do yoga do it for exercise or to reduce stress.</p>
        </div>
        <div className="container">
          <div className="slider-wrapper">
            <Slider {...settings}>
              {data1.map((d, index) => (
                <div key={index} className="slide">
                  <div className="image-container">
                    <img src={d.img} alt={d.name} className="image" />
                  </div>
                  <div className="content">
                    <button className="more-info-button">Wisdom Sri Lanka</button>
                    <p className="review">{d.review}</p>
                    <div className="date-container">
                      <FaCalendarAlt className="icon" />
                      <span className="date-text">{d.date}</span>
                      <p className="title">{d.name}</p>
                      <FaClock className="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <br />
            <br />
            <Link to="/yoga">
              <button className='mInfoB'>More info</button>
            </Link>

          </div>
        </div>
        <br />
        <div className='heading2'>
          <p><b>Sermons</b></p>
          <p>A sermon is a religious discourse or oration by a preacher, usually a member of clergy. Sermons address a scriptural, theological, or moral topic, usually expounding on a type of belief, law, or behavior within both past and present contexts.</p>
        </div>
        <div className="container">
          <div className="slider-wrapper">
            <Slider {...settings}>
              {data2.map((d, index) => (
                <div key={index} className="slide">
                  <div className="image-container">
                    <img src={d.img} alt={d.name} className="image" />
                  </div>
                  <div className="content">
                    <button className="more-info-button">Wisdom Sri Lanka</button>
                    <p className="review">{d.review}</p>
                    <div className="date-container">
                      <FaCalendarAlt className="icon" />
                      <span className="date-text">{d.date}</span>
                      <p className="title">{d.name}</p>
                      <FaClock className="icon" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <br />
            <br />
            <Link to="/sermons">
              <button className='mInfoB'>More info</button>
            </Link>
          </div>
        </div>
        <br /><br />
        <div className='d-flex container mb-5 justify-content-between'>
          <Link to="/accommodation">
            <button className='endleft'>Accomodations</button>
          </Link>
          <Link to="/about_us">
            <button className='endright'>Contact Us</button>
          </Link>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;