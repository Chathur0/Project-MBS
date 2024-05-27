import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import y1 from '/program/yoga.jpg'
import y2 from '/program/yoga1.jpg'
import y3 from '/program/yoga3.jpg'
import y4 from '/program/yoga4.jpg'
import y5 from '/program/yoga5.jpg'
import y6 from '/program/yoga6.jpg'
import Nav from '../components/navBar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

import { FaCalendarAlt, FaClock } from 'react-icons/fa';

function App() {
  const sliderSettings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      type: 'video',
      url: 'https://youtu.be/G4O3sV5M6HQ',
      title: 'First video',
      review: 'The deshana about abhidharma',
      name: '20/06/2023',
    },
   
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
     
    
    // Add more data items as needed
  ];
  const data1 = [

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
    // Add more data items as needed
  ];

  return (
    <><style>{`
      .Accomodation{
        background-color: #2e7d32;
        color: white;
         width: 150px;
         height: 30px;
         font-size: 1rem;
        padding: 0.2rem 0.5rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        margin-left: 45%;
      
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
        color: #2e7d32; /* Green color */
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
        background-color: #3f7b48; /* Indigo color */
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
      
      /* Responsive adjustments */
      @media (max-width: 1024px) {
        .container {
          width: 90%;
        }
      
        .title, .review {
          font-size: 0.9rem;
        }
      
        .heading2 {
          margin-left: 140px;
        }
      
        .mInfoB {
          font-size: 0.8rem;
          padding: 0.15rem 0.3rem;
          margin-left: 10px;
        }
      
        .endleft {
          margin-left: 200px;
        }
      
        .endright {
          margin-left: 250px;
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
          margin-left: 30px;
        }
      
        .mInfoB {
          font-size: 1rem;
          padding: 0.2rem 0.4rem;
          margin-left: 10px;
        }
      
        .endleft {
          margin-left: 100px;
        }
      
        .endright {
          margin-left: 150px;
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
`}</style><Nav/>
      <div className="heading1">
        <h1>Yoga</h1>
      </div>
      <div className="heading2">
        <p><b>previous yoga programs</b></p>
      </div>
      <div className="container">
        <div className="slider-wrapper">
          <Slider {...sliderSettings}>
            {data.map((d, index) => (
              <div key={index} className="slide">
                {d.type === 'video' ? (
                  <>
                    <div className="iframe-container">
                      <iframe
                        className="video-frame"
                        src={d.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={d.title}
                      ></iframe>
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            ))}
          </Slider>
          <br />
          <br />
        </div>
      </div>
      <div className="heading2">
        <p><b>upcoming yoga programs</b></p>
      </div>
      <div className="container">
        <div className="slider-wrapper">
          <Slider {...sliderSettings}>
            {data1.map((d, index) => (
              <div key={index} className="slide">
                {d.type === 'video' ? (
                  <>
                    <div className="iframe-container">
                      <iframe
                        className="video-frame"
                        src={d.url}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={d.title}
                      ></iframe>
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            ))}
          </Slider>
          <br />
          <br />
        </div>
      </div>

      <Link to="/accommodation">
        <button className='Accomodation'>Accomodation</button>
      </Link>
      <Footer/>
    </>
  );
}

export default App;

