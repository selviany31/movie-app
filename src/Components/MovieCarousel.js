import React from "react";
// import { UncontrolledCarousel } from "reactstrap";
import kong from "../Assets/Images/kong.jpg";
import oblivion from "../Assets/Images/oblivion.jpg";
import blodshot from "../Assets/Images/blodshot.jpg";
import { Carousel } from "react-bootstrap";

// const items = [
// 	{
// 		src: kong,
// 		key: "1",
// 	},
// 	{
// 		src: oblivion,
// 		key: "2",
// 	},
// 	{
// 		src: blodshot,
// 		key: "3",
// 	},
// ];

// const MovieCarousel = () => <UncontrolledCarousel items={items} />;

// export default MovieCarousel;

export default function MovieCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-wrapper">
            <img className="carousel-pict" src={kong} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-wrapper">
            <img className="carousel-pict" src={oblivion} alt="Third slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-wrapper">
            <img className="carousel-pict" src={blodshot} alt="Third slide" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
