import p1 from "/carousel/p1.jpg";
import p2 from "/carousel/p2.jpg";
import p3 from "/carousel/p3.jpg";
import p4 from "/carousel/p4.jpg";
import p5 from "/carousel/p5.jpg";
import p6 from "/carousel/p6.jpg";
import p7 from "/carousel/p7.jpg";
import p8 from "/carousel/p8.jpg";
import "./carousel.css";
export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src={p1} class="d-block w-100 custom" alt=".." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5 >Visit Sir Lanka</h5>
            <p >Discover the beautiful beaches of Sri Lanka. Your perfect coastal getaway awaits!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p2} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Natural Beauty of Sri Lanka</h5>
            <p>Come and experience the stunning natural beauty of Sri Lanka!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p3} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Historical Marvels of Sri Lanka</h5>
            <p>Come and explore the historical wonders of Sri Lanka!</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p4} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Power of Meditation</h5>
            <p>Experience the calming power of meditation and relax your mind.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p5} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Yoga</h5>
            <p>Yoga will relax your body and rejuvenate your spirit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p6} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Perfect Travel Accommodation</h5>
            <p>Choose accommodation that offers freedom and comfort during your travels.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p7} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Cinnamon Products</h5>
            <p>Explore the essence of wellness with our premium cinnamon products from here.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={p8} class="d-block w-100 custom" alt="..." />
          <div class="carousel-caption d-none d-md-block text-shadow">
            <h5>Volunteer</h5>
            <p>Stay at our MBS , help to MBS, and explore the beauty of the island. Join us in creating positive change and unforgettable experiences!</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
