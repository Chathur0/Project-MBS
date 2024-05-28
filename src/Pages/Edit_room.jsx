import React, { useState, useEffect } from "react";
import Ai1 from "/accommodation-images/si.jpg";
import Ai2 from "/accommodation-images/do.jpg";
import Ai3 from "/accommodation-images/tr.jpg";
import Ai4 from "/accommodation-images/fa.jpg";
import Nav from "../components/navBar";
import Footer from "../components/footer";

const exampleRoom = {
  roomNumber: "101",
  roomType: "single room",
  area: "35 sqm",
  capacityAdult: "2",
  capacityChild: "1",
  pricePerDay: "100",
  description: "A cozy single room with a great view.",
  view: "Sea view",
  headlines: ["Spacious", "Sea view", "Free Wi-Fi"],
  technologies: ["Smart TV", "High-speed Internet"],
  services: ["Room service", "Daily housekeeping"],
  beds: ["Queen size bed"],
  baths: ["Walk-in shower"],
  mainImage: Ai1,
  images: [Ai1, Ai2, Ai3, Ai4],
};

function EditRoom({ room = exampleRoom }) {
  const [roomDetails, setRoomDetails] = useState({
    roomNumber: "",
    roomType: "",
    area: "",
    capacityAdult: "",
    capacityChild: "",
    pricePerDay: "",
    description: "",
    view: "",
  });
  const [headlines, setHeadlines] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [services, setServices] = useState([]);
  const [beds, setBeds] = useState([]);
  const [baths, setBaths] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (room) {
      setRoomDetails({
        roomNumber: room.roomNumber || "",
        roomType: room.roomType || "",
        area: room.area || "",
        capacityAdult: room.capacityAdult || "",
        capacityChild: room.capacityChild || "",
        pricePerDay: room.pricePerDay || "",
        description: room.description || "",
        view: room.view,
      });
      setHeadlines(room.headlines || []);
      setTechnologies(room.technologies || []);
      setServices(room.services || []);
      setBeds(room.beds || []);
      setBaths(room.baths || []);
      setMainImage(room.mainImage || null);
      setImages(room.images || []);
    }
  }, [room]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddField = (setter, array) => {
    setter([...array, ""]);
  };

  const handleRemoveField = (setter, array, index) => {
    const newArray = array.filter((_, i) => i !== index);
    setter(newArray);
  };

  const handleFieldChange = (setter, array, index, value) => {
    const newArray = array.map((item, i) => (i === index ? value : item));
    setter(newArray);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    if (!mainImage && files.length > 0) {
      setMainImage(files[0]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    if (index === 0 && images.length > 0) {
      setMainImage(newImages[0] || null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...roomDetails,
      headlines,
      technologies,
      services,
      beds,
      baths,
      mainImage,
      images,
    });
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
    } `}</style>
      <Nav />
      <div className="container">
        <h3 className="my-5 fw-bolder text-center" style={{ color: "#05062d" }}>
          Edit Room
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="container bg-light border rounded p-5 text-center">
            <h5 style={{ color: "#05062d" }} className="fw-bold">
              Main Details
            </h5>
            {/* Main Details Form Fields */}
            <div className="row text-start mt-5 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  Room Number :
                </label>
              </div>
              <div className="col-12 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter room number"
                  name="roomNumber"
                  value={roomDetails.roomNumber}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                />
              </div>
            </div>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  Room Type :
                </label>
              </div>
              <div className="col-12 col-md-10">
                <select
                  className="form-control"
                  name="roomType"
                  value={roomDetails.roomType}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                >
                  <option value="" disabled hidden>
                    Choose room type
                  </option>
                  <option value="single room">Single Room</option>
                  <option value="double room">Double Room</option>
                  <option value="triple room">Triple Room</option>
                  <option value="family room">Family Room</option>
                </select>
              </div>
            </div>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  Area :
                </label>
              </div>
              <div className="col-12 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Area Of The Room"
                  name="area"
                  value={roomDetails.area}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                />
              </div>
            </div>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  Capacity :
                </label>
              </div>
              <div className="col-12 col-md-10 d-flex gap-3">
                <select
                  className="form-control"
                  name="capacityAdult"
                  value={roomDetails.capacityAdult}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                >
                  <option value="" disabled hidden>
                    Adult
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <select
                  className="form-control"
                  name="capacityChild"
                  value={roomDetails.capacityChild}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                >
                  <option value="" disabled hidden>
                    Child
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  Price per day :
                </label>
              </div>
              <div className="col-12 col-md-10">
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  placeholder="Enter Price Per Day"
                  name="pricePerDay"
                  value={roomDetails.pricePerDay}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                />
              </div>
            </div>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  Description :
                </label>
              </div>
              <div className="col-12 col-md-10">
                <textarea
                  className="form-control"
                  placeholder="Enter Simple Description About Room"
                  name="description"
                  value={roomDetails.description}
                  onChange={handleInputChange}
                  rows="5"
                  style={{ color: "#05062d", fontWeight: "600" }}
                ></textarea>
              </div>
            </div>

            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label className="fw-bold" style={{ color: "#05062d" }}>
                  View:
                </label>
              </div>
              <div className="col-12 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter The View From Room"
                  name="view"
                  value={roomDetails.view}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                />
              </div>
            </div>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 className="fw-bold mb-5" style={{ color: "#05062d" }}>
              Headlines
            </h5>
            {headlines.map((headline, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Details Highlighting The Key Features Of The Room"
                    value={headline}
                    onChange={(e) =>
                      handleFieldChange(
                        setHeadlines,
                        headlines,
                        index,
                        e.target.value
                      )
                    }
                    style={{ color: "#05062d", fontWeight: "600" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() =>
                      handleRemoveField(setHeadlines, headlines, index)
                    }
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-custom mt-3"
              onClick={() => handleAddField(setHeadlines, headlines)}
            >
              + Add Headline
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 className="fw-bold mb-5" style={{ color: "#05062d" }}>
              Technology
            </h5>
            {technologies.map((technology, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Details Technology Features Of The Room"
                    value={technology}
                    onChange={(e) =>
                      handleFieldChange(
                        setTechnologies,
                        technologies,
                        index,
                        e.target.value
                      )
                    }
                    style={{ color: "#05062d", fontWeight: "600" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() =>
                      handleRemoveField(setTechnologies, technologies, index)
                    }
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-custom mt-3"
              onClick={() => handleAddField(setTechnologies, technologies)}
            >
              + Add Technology
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 className="fw-bold mb-5" style={{ color: "#05062d" }}>
              Services
            </h5>
            {services.map((service, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Services That Will Be Provided"
                    value={service}
                    onChange={(e) =>
                      handleFieldChange(
                        setServices,
                        services,
                        index,
                        e.target.value
                      )
                    }
                    style={{ color: "#05062d", fontWeight: "600" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() =>
                      handleRemoveField(setServices, services, index)
                    }
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-custom mt-3"
              onClick={() => handleAddField(setServices, services)}
            >
              + Add Service
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 className="fw-bold mb-5" style={{ color: "#05062d" }}>
              Beds
            </h5>
            {beds.map((bed, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Details Of The Beds"
                    value={bed}
                    onChange={(e) =>
                      handleFieldChange(setBeds, beds, index, e.target.value)
                    }
                    style={{ color: "#05062d", fontWeight: "600" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => handleRemoveField(setBeds, beds, index)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-custom mt-3"
              onClick={() => handleAddField(setBeds, beds)}
            >
              + Add Bed
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 className="fw-bold mb-5" style={{ color: "#05062d" }}>
              Baths
            </h5>
            {baths.map((bath, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Details Of The Baths"
                    value={bath}
                    onChange={(e) =>
                      handleFieldChange(setBaths, baths, index, e.target.value)
                    }
                    style={{ color: "#05062d", fontWeight: "600" }}
                  />
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => handleRemoveField(setBaths, baths, index)}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-custom mt-3"
              onClick={() => handleAddField(setBaths, baths)}
            >
              + Add Bath
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 className="fw-bold mb-5" style={{ color: "#05062d" }}>
              Images
            </h5>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12">
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={handleImageChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                />
              </div>
            </div>

            <div className="row w-100 mt-5">
              {images.map((image, index) => (
                <div
                  key={index}
                  className=" col-12 col-sm-6 col-md-4 col-lg-3 position-relative mb-3"
                >
                  <img
                    src={
                      typeof image === "string"
                        ? image
                        : URL.createObjectURL(image)
                    }
                    alt={`Room Image ${index + 1}`}
                    className="w-100"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    type="button"
                    className="position-absolute border-0 text-white fw-bold"
                    style={{
                      padding: "2px 7px",
                      top: "0",
                      right: "12px",
                      backgroundColor: "red",
                    }}
                    onClick={() => handleRemoveImage(index)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-custom w-100 my-5" type="submit">
            Update Room
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditRoom;
