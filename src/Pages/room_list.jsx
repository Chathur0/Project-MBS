import React, { useEffect, useState, useContext } from "react";
import Nav from "../components/navBar";
import Footer from "../components/footer";
import { useParams, Link } from "react-router-dom";
import CheckAvailability from "../components/checkAvailability";
import RoomViewer from "../components/RoomViewer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import notFound from "/icons/notFound.png";
import { BookingContext } from "../context/BookingContext";
const roomDescription = {
  single_room: {
    description:
      "Our single rooms provide a serene and comfortable space for solo travelers. Equipped with a cozy single bed and modern amenities, these rooms offer everything you need for a restful stay. Perfect for business trips or solo adventures, our single rooms ensure privacy and relaxation in a compact yet well-appointed setting.",
  },
  double_room: {
    description:
      "Our double rooms are designed to accommodate two guests, featuring either one double bed or two single beds. These rooms offer ample space and modern conveniences, making them ideal for couples or friends traveling together. Enjoy a restful night's sleep and a comfortable stay in a welcoming environment.",
  },
  triple_room: {
    description:
      "Our triple rooms are perfect for small groups or families, offering a practical and spacious solution. Typically furnished with one double bed and one single bed, or three single beds, these rooms provide plenty of space for everyone. With modern amenities and a comfortable layout, our triple rooms ensure a pleasant stay for all guests.",
  },
  family_room: {
    description:
      "Our family rooms offer the perfect blend of comfort and convenience for your stay. Designed with families in mind, these spacious accommodations provide ample space for relaxation and bonding time. With cozy beds, modern amenities, our family rooms ensure a comfortable stay for all ages. Create lasting memories together in a warm and welcoming atmosphere, where every member of the family can feel at home.",
  },
};
export default function room_list() {
  const convertToTypeCase = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const { type } = useParams();
  const convertedType = convertToTypeCase(type);
  const roomDes = roomDescription[type];
  const [rooms, setRooms] = useState([]);
  const [bookedRoom, setBookedRoom] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const isRoom = rooms.length > 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //.............................................................
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/accommodation/getRoomForDisplay/${convertedType}`
      )
      .then((response) => {
        if (response.data.Status === "Success") {
          const data = response.data.data;
          setRooms(data);
          setFilteredRooms(data);
        } else {
          console.error("Failed to fetch room details:", response.data.Message);
        }
      })
      .catch((error) => {
        console.error("Error fetching room details:", error);
      });

    axios
      .get(`http://localhost:3000/api/booked-rooms?type=${convertedType}`)
      .then((response) => {
        setBookedRoom(response.data);
      })
      .catch((error) => {
        console.error("Error fetching booked room details:", error);
      });
  }, [convertedType]);

  const { startDate, endDate, adults, childrenCount, childAges, totalDays } =
    useContext(BookingContext);
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

      const availableRooms = rooms.filter((room) => {
        const definedCapacity = JSON.parse(room.capacity);
        const definedAdult = parseInt(definedCapacity.Adult);
        const definedChild = parseInt(definedCapacity.Child);
        if (adults > definedAdult || childrenCount > definedChild) {
          return false;
        }
        const isBooked = bookedRoom.some((booked) => {
          const checkIn = new Date(booked.check_in).getTime();
          const checkOut = new Date(booked.check_out).getTime();
          return room.r_id === booked.r_id && start < checkOut && end > checkIn;
        });
        return !isBooked;
      });

      setFilteredRooms(availableRooms);
    } else {
      setFilteredRooms(rooms);
    }
  }, [startDate, endDate, rooms, bookedRoom,adults,childrenCount]);
  
  return (
    <div>
      <Nav />
      <div className="container text-center">
        <h3 className="mt-5 fw-bolder mb-5" style={{ color: "#05062d" }}>
          {convertedType.toUpperCase()}
        </h3>
        <p className="mt-5 fw-semibold mb-5" style={{ color: "#05062d" }}>
          {roomDes.description}
        </p>
      </div>
      <CheckAvailability/>
      {isRoom ? (
        <div className="mb-5">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((data) => {
              const roomName = data.type
                ? `${
                    data.type.charAt(0).toUpperCase() + data.type.slice(1)
                  } nm ${data.r_name}`
                : "";
              const image = data.image ? JSON.parse(data.image) : null;
              const firstImage = image ? image[0] : null;
              const bedD = JSON.parse(JSON.parse(data.bed_details));
              const bedDetails = bedD ? bedD[0] : null;
              const capacityDetails = JSON.parse(data.capacity);

              return (
                <RoomViewer
                  key={data.r_id}
                  type={type}
                  id={data.r_id}
                  name={roomName}
                  price={data.price}
                  image={firstImage}
                  bed={bedDetails}
                  capacity={`${capacityDetails.Adult} Adult & ${capacityDetails.Child} Child`}
                />
              );
            })
          ) : (
            <div className="container text-center my-5">
              <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-4">
                  <img src={notFound} alt="" className="w-100" />
                  <h2 style={{ color: "#05062d" }}>
                    Sorry, no rooms available!
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="container text-center my-5">
          <div className="row d-flex justify-content-center">
            <div className="col-10 col-md-4">
              <img src={notFound} alt="" className="w-100" />
              <h2 style={{ color: "#05062d" }}>Sorry, no rooms available!</h2>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
