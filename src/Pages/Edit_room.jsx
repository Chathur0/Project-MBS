import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import warning from "/icons/warning.png";

const predefinedHeadlines = [
  "Tea & Coffee maker",
  "Complimentary mineral water",
  "Spacious, brightly lit closets",
  "In-room digital safe",
  "Hair dryer",
  "Electric shaver outlet",
  "Digital weighing scale",
  "Writing desk & chair",
  "Daily housekeeping",
  "Ironing board & iron",
  "Shoe shine kit",
  "Washing machine",
  "High-speed Wi-Fi",
  "LED TV with cable channels",
  "Air conditioning",
  "Mini refrigerator",
  "Work desk with lamp",
  "Comfortable seating area",
  "En-suite bathroom with hot/cold water",
  "Premium bedding and pillows",
  "Blackout curtains for privacy",
  "Electronic door locks for security",
  "In-room dining service",
  "24-hour room service",
  "Laundry and dry cleaning service",
  "Complimentary toiletries",
  "Bathrobes and slippers",
  "Personalized wake-up call service",
  "Laptop-sized safe",
  "Soundproofing for peaceful sleep",
  "Panoramic city or sea view",
];

const predefinedTechnologies = [
  "High-speed Wi-Fi",
  "LED TV with cable channels",
  "Air conditioning",
  "Mini refrigerator",
  "Work desk with lamp",
  "Comfortable seating area",
  "En-suite bathroom with hot/cold water",
  "Premium bedding and pillows",
  "Blackout curtains for privacy",
  "Electronic door locks for security",
  "In-room dining service",
  "24-hour room service",
  "Laundry and dry cleaning service",
  "Complimentary toiletries",
  "Bathrobes and slippers",
  "Personalized wake-up call service",
  "Laptop-sized safe",
  "Soundproofing for peaceful sleep",
];

const predefinedServices = [
  "Room service",
  "Daily housekeeping",
  "Laundry service",
  "Dry cleaning service",
  "Concierge service",
  "Luggage storage",
  "Airport shuttle service",
  "24-hour front desk",
  "Currency exchange",
  "Childcare service",
  "Pet-friendly service",
  "Wake-up call service",
  "Car rental service",
  "Tours and ticket assistance",
  "Business center services",
];

const predefinedBathDetails = [
  "Bathtub",
  "Shower",
  "Jacuzzi",
  "Hair dryer",
  "Complimentary toiletries",
  "Bathrobes and slippers",
  "Towels",
  "Hot and cold water",
];

const predefinedBedDetails = [
  "King size bed",
  "Queen size bed",
  "Double bed",
  "Single bed",
  "Twin bed",
  "Bunk bed",
  "Sofa bed",
  "Premium bedding",
  "Hypoallergenic pillows",
];

function EditRoom() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/checkAdmin", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.Status === "Success" && res.data.isAdmin === "Admin") {
        } else {
          alert("You do not have permission to access this page");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const { id } = useParams();
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
  const [headlines, setHeadlines] = useState([""]);
  const [technologies, setTechnologies] = useState([""]);
  const [services, setServices] = useState([""]);
  const [beds, setBeds] = useState([""]);
  const [baths, setBaths] = useState([""]);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [activeField, setActiveField] = useState({ type: null, index: null });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/accommodation/getRoom/${id}`)
      .then((response) => {
        if (response.data.Status === "Success") {
          const data = response.data.data;
          setRoomDetails({
            roomNumber: data.r_name,
            roomType: data.type,
            area: data.area,
            capacityAdult: JSON.parse(data.capacity).Adult,
            capacityChild: JSON.parse(data.capacity).Child,
            pricePerDay: data.price,
            description: data.r_discription,
            view: data.view,
          });

          setHeadlines(JSON.parse(JSON.parse(data.r_highlight)));
          setTechnologies(JSON.parse(JSON.parse(data.technology)));
          setServices(JSON.parse(JSON.parse(data.services)));
          setBeds(JSON.parse(JSON.parse(data.bed_details)));
          setBaths(JSON.parse(JSON.parse(data.bath_details)));

          const imagePaths = JSON.parse(data.image).map(
            (img) => `/A_images/${img}`
          );
          setImages(imagePaths);
          setMainImage(imagePaths[0]);
        } else {
          console.error("Failed to fetch room details:", response.data.Message);
        }
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });
  }, [id]);
  const confirmDelete = () => {
    const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "block";
  };

  const closeModal = () => {
    const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "none";
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append("roomNumber", roomDetails.roomNumber);
    formData.append("roomType", roomDetails.roomType);
    formData.append("area", roomDetails.area);
    formData.append("capacityAdult", roomDetails.capacityAdult);
    formData.append("capacityChild", roomDetails.capacityChild);
    formData.append("pricePerDay", roomDetails.pricePerDay);
    formData.append("description", roomDetails.description);
    formData.append("view", roomDetails.view);
    formData.append("headlines", JSON.stringify(headlines));
    formData.append("technologies", JSON.stringify(technologies));
    formData.append("services", JSON.stringify(services));
    formData.append("beds", JSON.stringify(beds));
    formData.append("baths", JSON.stringify(baths));
  
    try {
      const response = await axios.put(`http://localhost:3000/accommodation/updateRoom/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.data.Status === "Success") {
        alert("Room updated successfully");
        navigate('/accommodation-admin/all-rooms')
      } else {
        console.error("Failed to update room:", response.data.Message);
      }
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomDetails({ ...roomDetails, [name]: value });
  };

  const handleAddField = (setter, fields) => {
    setter([...fields, ""]);
  };

  const handleRemoveField = (setter, fields, index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setter(newFields);
  };

  const handleFieldChange = (setter, fields, index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setter(newFields);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...fileUrls]);
    if (!mainImage) {
      setMainImage(fileUrls[0]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    if (mainImage === images[index]) {
      setMainImage(newImages[0] || null);
    }
  };
  const handleSuggestionClick = (setter, fields, index, value) => {
    handleFieldChange(setter, fields, index, value);
    setActiveField({ type: null, index: null });
  };
  const handleInputFocus = (type, index) => {
    setActiveField({ type, index });
  };
  useEffect(() => {
    if (activeField.type !== null) {
      const fields =
        activeField.type === "headlines"
          ? headlines
          : activeField.type === "technologies"
          ? technologies
          : activeField.type === "services"
          ? services
          : activeField.type === "beds"
          ? beds
          : baths;

      const predefined =
        activeField.type === "headlines"
          ? predefinedHeadlines
          : activeField.type === "technologies"
          ? predefinedTechnologies
          : activeField.type === "services"
          ? predefinedServices
          : activeField.type === "beds"
          ? predefinedBedDetails
          : predefinedBathDetails;

      const currentInput = fields[activeField.index].toLowerCase();
      const filteredSuggestions = predefined.filter((item) =>
        item.toLowerCase().includes(currentInput)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [activeField, headlines, technologies, services, beds, baths]);

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".suggestions-container")) {
      setActiveField({ type: null, index: null });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
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
    }
    .suggestion-item:hover{
      cursor: pointer;
      background-color: rgb(235, 235, 235);
  }    
    `}</style>
      <Nav />
      <div className="container text-center">
        <h2 style={{ color: "#05062d" }} className="mb-5">
          Edit Room
        </h2>
        <form className="text-start">
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
                  required
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
                  required
                >
                  <option value="" disabled hidden>
                    Choose room type
                  </option>
                  <option value="Single Room">Single Room</option>
                  <option value="Double Room">Double Room</option>
                  <option value="Triple Room">Triple Room</option>
                  <option value="Family Room">Family Room</option>
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
                  required
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
                  required
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
                  required
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
                  required
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
                  style={{
                    color: "#05062d",
                    fontWeight: "600",
                    height: "100px",
                  }}
                  required
                />
              </div>
            </div>
            <div className="row text-start mt-3 d-flex">
              <div className="col-12 col-md-2">
                <label style={{ color: "#05062d" }} className="fw-bold">
                  View :
                </label>
              </div>
              <div className="col-12 col-md-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Any Special Views Surrounding The Room"
                  name="view"
                  value={roomDetails.view}
                  onChange={handleInputChange}
                  style={{ color: "#05062d", fontWeight: "600" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 style={{ color: "#05062d" }} className="fw-bold mb-5">
              Room Highlights
            </h5>
            {headlines.map((headline, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Details Highlighting The Key Features Of The Room"
                      value={headline}
                      onFocus={() => handleInputFocus("headlines", index)}
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
                    {activeField.type === "headlines" &&
                      activeField.index === index && (
                        <div className="suggestions-container position-absolute border rounded-1 bg-light">
                          {suggestions.length > 0 ? (
                            suggestions.map((suggestion, i) => (
                              <div
                                key={i}
                                className="suggestion-item px-2"
                                onClick={() =>
                                  handleSuggestionClick(
                                    setHeadlines,
                                    headlines,
                                    index,
                                    suggestion
                                  )
                                }
                              >
                                {suggestion}
                              </div>
                            ))
                          ) : (
                            <div className="suggestion-item px-2">
                              No suggestions found
                            </div>
                          )}
                        </div>
                      )}
                  </div>
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
            <h5 style={{ color: "#05062d" }} className="fw-bold mb-5">
              Technology
            </h5>
            {technologies.map((technology, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Details Technology Features Of The Room"
                      value={technology}
                      onFocus={() => handleInputFocus("technologies", index)}
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
                    {activeField.type === "technologies" &&
                      activeField.index === index && (
                        <div className="suggestions-container position-absolute border rounded-1 bg-light">
                          {suggestions.length > 0 ? (
                            suggestions.map((suggestion, i) => (
                              <div
                                key={i}
                                className="suggestion-item px-2"
                                onClick={() =>
                                  handleSuggestionClick(
                                    setTechnologies,
                                    technologies,
                                    index,
                                    suggestion
                                  )
                                }
                              >
                                {suggestion}
                              </div>
                            ))
                          ) : (
                            <div className="suggestion-item px-2">
                              No suggestions found
                            </div>
                          )}
                        </div>
                      )}
                  </div>
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
            <h5 style={{ color: "#05062d" }} className="fw-bold mb-5">
              Services
            </h5>
            {services.map((service, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Services That Will Be Provided"
                      value={service}
                      onFocus={() => handleInputFocus("services", index)}
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
                    {activeField.type === "services" &&
                      activeField.index === index && (
                        <div className="suggestions-container position-absolute border rounded-1 bg-light">
                          {suggestions.length > 0 ? (
                            suggestions.map((suggestion, i) => (
                              <div
                                key={i}
                                className="suggestion-item px-2"
                                onClick={() =>
                                  handleSuggestionClick(
                                    setServices,
                                    services,
                                    index,
                                    suggestion
                                  )
                                }
                              >
                                {suggestion}
                              </div>
                            ))
                          ) : (
                            <div className="suggestion-item px-2">
                              No suggestions found
                            </div>
                          )}
                        </div>
                      )}
                  </div>
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
            <h5 style={{ color: "#05062d" }} className="fw-bold mb-5">
              Bed Features
            </h5>
            {beds.map((bed, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Details Of The Bed Features"
                      value={bed}
                      onFocus={() => handleInputFocus("beds", index)}
                      onChange={(e) =>
                        handleFieldChange(setBeds, beds, index, e.target.value)
                      }
                      style={{ color: "#05062d", fontWeight: "600" }}
                    />
                    {activeField.type === "beds" &&
                      activeField.index === index && (
                        <div className="suggestions-container position-absolute border rounded-1 bg-light">
                          {suggestions.length > 0 ? (
                            suggestions.map((suggestion, i) => (
                              <div
                                key={i}
                                className="suggestion-item px-2"
                                onClick={() =>
                                  handleSuggestionClick(
                                    setBeds,
                                    beds,
                                    index,
                                    suggestion
                                  )
                                }
                              >
                                {suggestion}
                              </div>
                            ))
                          ) : (
                            <div className="suggestion-item px-2">
                              No suggestions found
                            </div>
                          )}
                        </div>
                      )}
                  </div>
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
              + Add Bed Feature
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 style={{ color: "#05062d" }} className="fw-bold mb-5">
              Bath Features
            </h5>
            {baths.map((bath, index) => (
              <div className="row text-start mt-3 d-flex" key={index}>
                <div className="col-12 d-flex">
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Details Of The Bathroom Features"
                      value={bath}
                      onFocus={() => handleInputFocus("baths", index)}
                      onChange={(e) =>
                        handleFieldChange(
                          setBaths,
                          baths,
                          index,
                          e.target.value
                        )
                      }
                      style={{ color: "#05062d", fontWeight: "600" }}
                    />
                    {activeField.type === "baths" &&
                      activeField.index === index && (
                        <div className="suggestions-container position-absolute border rounded-1 bg-light">
                          {suggestions.length > 0 ? (
                            suggestions.map((suggestion, i) => (
                              <div
                                key={i}
                                className="suggestion-item px-2"
                                onClick={() =>
                                  handleSuggestionClick(
                                    setBaths,
                                    baths,
                                    index,
                                    suggestion
                                  )
                                }
                              >
                                {suggestion}
                              </div>
                            ))
                          ) : (
                            <div className="suggestion-item px-2">
                              No suggestions found
                            </div>
                          )}
                        </div>
                      )}
                  </div>
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
              + Add Bath Feature
            </button>
          </div>
          <div className="container bg-light border rounded p-5 text-center mt-5">
            <h5 style={{ color: "#05062d" }} className="fw-bold">
              Images
            </h5>
            <input
              type="file"
              className="form-control mt-5"
              id="inputGroupFile02"
              multiple
              onChange={handleImageChange}
            />
            <div className="mt-5">
              <h6 style={{ color: "#05062d" }} className="fw-bold text-start">
                Main image:
              </h6>
              {mainImage && (
                <div className="row">
                  <div className="d-flex align-items-center mt-2 col-12 col-sm-6 col-md-4 col-lg-3">
                    <img
                      src={
                        mainImage.startsWith("/A_images/")
                          ? `http://localhost:3000${mainImage}`
                          : mainImage
                      }
                      alt="Main"
                      className="w-100"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <h6 style={{ color: "#05062d" }} className="fw-bold text-start">
                Other images:
              </h6>
              <div className="row w-100">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className=" col-12 col-sm-6 col-md-4 col-lg-3 position-relative mb-3"
                  >
                    <img
                      src={
                        image.startsWith("/A_images/")
                          ? `http://localhost:3000${image}`
                          : image
                      }
                      alt={`Room ${index + 1}`}
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
          </div>
        </form>
        <button className="btn btn-custom w-100 my-5" onClick={confirmDelete}>
            Update Room
          </button>
      </div>
      <div
        className="modal"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "none" }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content row">
            <div className="col-12 mt-3 d-flex justify-content-between">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirm Update
              </h5>
              <button
                type="button"
                className="close btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body text-center">
              <img src={warning} alt="" width={100} height={100}/>
              <p className="fw-bold text-danger mt-1">Are you sure you want to Update this room?</p>
            </div>
            <div className="container d-flex justify-content-between mb-2">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleSubmit}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditRoom;
