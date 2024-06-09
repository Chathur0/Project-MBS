import { useState, useEffect } from "react";
import Nav from "../components/navBar";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import Button from "../components/button";
import Viewer from "../components/categoryViewer";
import p1 from "/carousel/p1.jpg";
import p2 from "/carousel/p2.jpg";
import p3 from "/carousel/p3.jpg";
import p4 from "/carousel/p4.jpg";
import p5 from "/carousel/p5.jpg";
import p6 from "/carousel/p6.jpg";
import p7 from "/carousel/p7.jpg";
import p8 from "/carousel/p8.jpg";
import Ai1 from "/accommodation-images/si.jpg";
import Ai2 from "/accommodation-images/do.jpg";
import Ai3 from "/accommodation-images/tr.jpg";
import Ai4 from "/accommodation-images/fa.jpg";
import Pi1 from "/program-images/y.jpeg";
import Pi2 from "/program-images/m.jpeg";
import Pi3 from "/program-images/s.jpeg";
import Pdi1 from "/product-images/oil.jpeg";
import Pdi2 from "/product-images/powder.jpeg";
import Pdi3 from "/product-images/stick.jpg";
import Pdi4 from "/product-images/tea.jpg";
import Vi1 from "/volunteer-images/v1.jpg";
import Vi2 from "/volunteer-images/v2.jpg";
import Vi3 from "/volunteer-images/v3.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
const carouselDetails = [
  {
    image: p1,
    header: "Visit Sir Lanka",
    description:
      "Discover the beautiful beaches of Sri Lanka. Your perfect coastal getaway awaits!",
  },
  {
    image: p2,
    header: "Natural Beauty of Sri Lanka",
    description:
      "Come and experience the stunning natural beauty of Sri Lanka!",
  },
  {
    image: p3,
    header: "Historical Marvels of Sri Lanka",
    description: "Come and explore the historical wonders of Sri Lanka!",
  },
  {
    image: p4,
    header: "Power of Meditation",
    description:
      "Experience the calming power of meditation and relax your mind.",
  },
  {
    image: p5,
    header: "Yoga",
    description: "Yoga will relax your body and rejuvenate your spirit.",
  },
  {
    image: p6,
    header: "Perfect Travel Accommodation",
    description:
      "Choose accommodation that offers freedom and comfort during your travels.",
  },
  {
    image: p7,
    header: "Cinnamon Products",
    description:
      "Explore the essence of wellness with our premium cinnamon products from here.",
  },
  {
    image: p8,
    header: "Volunteer",
    description:
      "Stay at our MBS , help to MBS, and explore the beauty of the island. Join us in creating positive change and unforgettable experiences!",
  },
];
const Accommodation = [
  { img: Ai1, name: "SINGLE ROOM", to: "single_room" },
  { img: Ai2, name: "DOUBLE ROOM", to: "double_room" },
  { img: Ai3, name: "TRIPLE ROOM", to: "triple_room" },
  { img: Ai4, name: "FAMILY ROOM", to: "family_room" },
];
const Product = [
  { img: Pdi1, name: "CINNAMON OIL", to: "" },
  { img: Pdi2, name: "CINNAMON POWDER", to: "" },
  { img: Pdi3, name: "CINNAMON STICK", to: "" },
  { img: Pdi4, name: "CINNAMON TEA", to: "" },
];
const Program = [
  { img: Pi1, name: "YOGA", to: "" },
  { img: Pi2, name: "MEDITATION", to: "" },
  { img: Pi3, name: "SERMONS", to: "" },
];
const Volunteer = [
  { img: Vi1, name: "", to: "" },
  { img: Vi2, name: "", to: "" },
  { img: Vi3, name: "", to: "" },
];
let topicA = "ACCOMMODATION";
let descriptionA =
  "We offer various room types with excellent service at affordable rates. Enjoy your stay without breaking the bank and make the most of your leisure time here. Additionally, all volunteer guests can stay for free, inclusive of meals.";
let topicPg = "PROGRAM";
let descriptionP =
  "At our place, guests can choose from three programs: Yoga, Sermons, and Meditation. Yoga is available to all guests at a small fee, while Sermons are based on Buddhism teachings for life guidance. Meditation is offered to all guests for free, helping to relax busy minds. Additionally, volunteer guests can join the yoga program at no cost.";
let topicPd = "PRODUCT";
let descriptionPd =
  "We offer a variety of non-toxic nurture products at affordable prices, all designed to promote a healthy lifestyle. Our products are safe for your body and come with delivery options worldwide. Experience the goodness of our offerings delivered right to your doorstep, no matter where you are.";
let topicV = "VOLUNTEER";
let descriptionV =
  "We're hosting the IUHS campus here, where 200 students study completely free of charge, including complimentary meals. Additionally, we provide accommodation and meals for 50 monks and female monks living on-site. As a volunteer, you can contribute to teaching or participate in various programs without worrying about expenses; food, accommodation. and yoga also free of charge.";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/checkAdmin", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.Status === "Success" && res.data.isAdmin === "Admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Nav/>
      <Carousel details={carouselDetails} />
      <div className="container mt-4 mb-4 ">
        <Link to="/all-admins" className="text-decoration-none">
          <Button content="Admin" displayType={`${isAdmin ? 'block': 'none'}`}/>
        </Link>
      </div>
      <Viewer
        array={Accommodation}
        topic={topicA}
        description={descriptionA}
        needToGo="about Volunteer click"
        type="/accommodation"
      />
      <Viewer
        array={Program}
        topic={topicPg}
        description={descriptionP}
        needToGo="about Volunteer click"
        type="/program"
      />
      <Viewer
        array={Product}
        topic={topicPd}
        description={descriptionPd}
        type="/product"
      />
      <Viewer array={Volunteer} topic={topicV} description={descriptionV} />
      <Footer />
    </div>
  );
}
