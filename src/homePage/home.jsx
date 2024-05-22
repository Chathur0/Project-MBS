import Nav from "../components/navBar";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import Button from "../components/button";
import Viewer from "../components/categoryViewer";
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

const Accommodation = [
  { img: Ai1, name: "SINGLE ROOM" },
  { img: Ai2, name: "DOUBLE ROOM" },
  { img: Ai3, name: "TRIPLE ROOM" },
  { img: Ai4, name: "FAMILY ROOM" },
];
const Product = [
  { img: Pdi1, name: "CINNAMON OIL" },
  { img: Pdi2, name: "CINNAMON POWDER" },
  { img: Pdi3, name: "CINNAMON STICK" },
  { img: Pdi4, name: "CINNAMON TEA" },
];
const Program = [
  { img: Pi1, name: "YOGA" },
  { img: Pi2, name: "MEDITATION" },
  { img: Pi3, name: "SERMONS" },
];
const Volunteer = [
  { img: Vi1, name: "" },
  { img: Vi2, name: "" },
  { img: Vi3, name: "" },
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
let topicV ="VOLUNTEER";
let descriptionV="We're hosting the IUHS campus here, where 200 students study completely free of charge, including complimentary meals. Additionally, we provide accommodation and meals for 50 monks and female monks living on-site. As a volunteer, you can contribute to teaching or participate in various programs without worrying about expenses; food, accommodation. and yoga also free of charge."


export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <div className="container mt-4 mb-4 ">
        <Button content="Admin" displayType="none" />
      </div>
      <Viewer array={Accommodation} topic={topicA} description={descriptionA} needToGo="about Volunteer click"/>
      <Viewer array={Program} topic={topicPg} description={descriptionP} needToGo="about Volunteer click"/>
      <Viewer array={Product} topic={topicPd} description={descriptionPd} />
      <Viewer array={Volunteer} topic={topicV} description={descriptionV} />
      <Footer />
    </div>
  );
}
