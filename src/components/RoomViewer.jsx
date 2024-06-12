import React from "react";
import i1 from "/accommodation-images/do.jpg";
import ac from "/icons/ac.png";
import bath from "/icons/bath.png";
import bed from "/icons/bed.png";
import park from "/icons/park.png";
import price from "/icons/price.png";
import tv from "/icons/tv.png";
import user from "/icons/user.png";
import wm from "/icons/wm.png";
import wifi from "/icons/wifi.png";
import { Link } from "react-router-dom";

export default function RoomViewer(props) {
  return (
    <div className="container mt-5">
      <style>{`
        .wholeContainer {
          border-radius: 15px;
        }
        .wholeContainer:hover {
          box-shadow: -1px -1px 4px #05062dc4, 1px -1px 4px #05062dc4, -1px 1px 4px #05062dc4, 1px 1px 4px #05062dc4;
        }
        .img {
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }
        .btn-custom{
          color: white;
          font-weight: 900;
          background-color: #3f7b48;
          padding: 0px 50px 0px 50px;
      }
      .btn-custom:hover{
          color: #3f7b48;
          background-color: white;
          border: 2px solid #3f7b48;
        }
          .img{
            height: 270px;
          }
        @media (max-width: 768px) {
          .img {
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border-bottom-left-radius: 0;
          }
        }
      `}</style>
      <div className="row bg-light d-flex justify-content-between wholeContainer border">
        <div className="col-12 col-md-6 col-lg-5 pe-0 ps-0">
          <img src={`http://localhost:3000/A_images/${props.image}`} alt="" className="w-100 img" />
        </div>
        <div className="col-12 col-md-6 col-lg-7 d-flex flex-column gap-3">
          <h3 className="mt-2 mb-2 fw-bolder ps-5" style={{ color: "#05062d" }}>
            {props.name}
          </h3>
          <div
            className="d-flex ps-5 align-items-center gap-2"
            style={{ color: "#05062d" }}
          >
            <img src={price} alt="" width={20} height={20} />
            <div className="fw-semibold">{props.price} LKR /pre day</div>
          </div>
          <div
            className="d-flex ps-5 align-items-center gap-2"
            style={{ color: "#05062d" }}
          >
            <img src={bed} alt="" width={20} height={20} />
            <div className="fw-semibold">{props.bed}</div>
          </div>
          <div
            className="d-flex ps-5 align-items-center gap-2"
            style={{ color: "#05062d" }}
          >
            <img src={user} alt="" width={20} height={20} />
            <div className="fw-semibold">{props.capacity}</div>
          </div>
          <div className="d-flex ps-5  w-100 container-fluid">
            <div className="row w-100">
              <div className="col-12 col-sm-6 d-flex gap-3">
                <img src={wifi} alt="" width={20} height={20} />
                <img src={bath} alt="" width={20} height={20} />
                <img src={wm} alt="" width={20} height={20} />
                <img src={park} alt="" width={20} height={20} />
                <img src={ac} alt="" width={20} height={20} />
                <img src={tv} alt="" width={20} height={20} />
              </div>
              <div className="col-12 col-sm-6 col-md-12 col-lg-6 d-flex mb-3 mt-3 mt-lg-4 ">
                <Link to={`/accommodation/${props.type}/${props.id}`}>
                  <button
                    type="button"
                    className="btn btn-custom ms-lg-auto ms-md-0 ms-0"
                  >
                    MORE INFO
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}