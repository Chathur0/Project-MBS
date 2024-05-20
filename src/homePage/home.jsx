import Nav from "../components/navBar";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import Button from "../components/button";
import Viewer from '../components/categoryViewer';
// const Accommodation = [
//   { img: i1, name: "SINGLE ROOM" },
//   { img: i2, name: "DOUBLE ROOM" },
//   { img: i3, name: "TRIPLE ROOM" },
//   { img: i4, name: "FAMILY ROOM" },
// ];

export default function Home() {
  return (
    <div>
      <Nav />
      <Carousel />
      <div className="container mt-4 mb-4 ">
        <Button content="Admin" />
      </div>
      <Viewer  />
      <Footer />
    </div>
  );
}
