import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type CarouselProps = {
    children: React.ReactNode;
  };

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };



  return (
    <div className="bg-primary text-center w-full text-white py-8">
      <div className="container mx-auto">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

// Custom Next Arrow for the slider
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute bg-white bottom-1/2 h-10 hover:bg-gray-200 inline-flex items-center justify-center right-0 mr-4 rounded-full shadow-lg text-gray-900 text-xl transform translate-y-1/2 w-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      &rsaquo;
    </div>
  );
};

// Custom Prev Arrow for the slider
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute bg-white bottom-1/2 h-10 hover:bg-gray-200 inline-flex items-center justify-center left-0 ml-4 rounded-full shadow-lg text-gray-900 text-xl transform translate-y-1/2 w-10`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      &lsaquo;
    </div>
  );
};

export default Carousel;
