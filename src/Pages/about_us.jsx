import React,{useEffect} from "react";
import Nav from "../components/navBar";
import Footer from "../components/footer";

export default function about_us() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <div className="container text-center">
        <h3 className="mt-5 fw-bolder mb-5" style={{ color: "#05062d" }}>
          ABOUT US
        </h3>
        <p className="mt-5 fw-semibold mb-5" style={{ color: "#05062d" }}>
          Welcome to the MBS Meditation Center in Galle, Sri Lanka. Our center
          offers a peaceful and comfortable place for foreigners to stay, with
          excellent service and beautiful surroundings. We provide three main
          programs: yoga, meditation, and sermons, to help you find inner peace
          and balance.
          <br />
          <br />
          Our center is located near many attractive places that you can explore
          during your stay. We also offer four types of high-quality cinnamon
          products within low price: cinnamon powder, cinnamon oil, cinnamon
          tea, and cinnamon sticks.
          <br />
          <br />
          At MBS Meditation Center, we are committed to education and community
          service. We provide IT and music education to 200 students, and 50
          monks and female monks visit our center regularly. All payments made
          on our website go to the Nalanda Foundation. These funds are used
          entirely to support the education of our students and to provide food,
          meditation, and other facilities for the students and monks.
          <br />
          <br />
          We welcome volunteers who wish to support our mission. Your help can
          make a big difference in the lives of our students and the community.
          <br />
          <br />
          Thank you for being a part of our journey towards a better future.
        </p>
      </div>
      <Footer />
    </div>
  );
}
