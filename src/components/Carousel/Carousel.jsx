import React from "react";
import "./Carousel.css";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import books1 from '../../images/books1.jpg'
import books2 from '../../images/books2.jpg'
import books3 from '../../images/books3.jpg'
import books4 from '../../images/books4.jpg'
import books5 from '../../images/books5.jpg'

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div className="photo">
          <img src={books1} alt="Books" />
        </div>

        <div className="photo">
          <img
            src={books2}
            alt="Books"
          />
        </div>

        <div className="photo">
          <img
            src={books3}
            alt="Books"
          />
        </div>

        <div className="photo">
          <img
            src={books4}
            alt="Books"
          />
        </div>

        <div className="photo">
          <img
            src={books5}
            alt="Books"
          />
        </div>
      </Slider>
    </div>
  );
}
