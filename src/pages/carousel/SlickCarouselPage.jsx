// SliderComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'; // Custom CSS for styling

const SlickCarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
          <div className="slide-caption">
            <h2>Beautiful Animation Slider</h2>
            <p>Slide 1 Description</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
          <div className="slide-caption">
            <h2>Beautiful Animation Slider</h2>
            <p>Slide 2 Description</p>
          </div>
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
          <div className="slide-caption">
            <h2>Beautiful Animation Slider</h2>
            <p>Slide 3 Description</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarouselPage;
