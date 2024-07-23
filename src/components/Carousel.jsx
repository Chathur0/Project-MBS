export default function Carousel({ details }) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <style>{`.custom{
    width: 100%;
    height: 80vh;
}
.text-shadow{
    text-shadow: -2px -2px 5px black, 2px -2px 5px black, -2px 2px 5px black, 2px 2px 5px black;
    color: white;
    
}
.text-shadow1{
    text-shadow: 2px 2px 3px white;
    color: black;
    font-weight: 900;
}
@media (max-width: 1024px) {
    .custom {
      height: 35vh;
    }
  }
  @media (max-width: 600px) {
    .custom {
      height: 25vh;
    }
  }`}</style>
      <div className="carousel-inner ">
        {details.map((data, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={data.image} className="d-block w-100 custom" alt=".." />
            <div className="carousel-caption d-none d-md-block text-shadow">
              <h5>{data.header}</h5>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
