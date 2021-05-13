import React from 'react';
import Slider from 'react-slick';

import carouselArrowLeft from '../../assets/icons/carousel_arrow_left.svg';
import carouselArrowLeftDisabled from '../../assets/icons/carousel_arrow_left_disabled.svg';
import carouselArrowRight from '../../assets/icons/carousel_arrow_right.svg';
import carouselArrowRightDisabled from '../../assets/icons/carousel_arrow_right_disabled.svg';

import * as styled from './index.style';

const Carousel = ({ children }) => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    const isDisabled = String(className).includes('slick-disabled');
    const classNameWithouArrow = String(className).replace('slick-arrow ', '');

    return (
      <div
        className={classNameWithouArrow}
        style={{
          ...style, zIndex: 3, top: '32%', right: 'calc(100vw - 92%)',
        }}
        onClick={onClick}
      >
        {isDisabled ? <img src={carouselArrowRightDisabled} alt="" /> : <img src={carouselArrowRight} alt="" />}
      </div>
    );
  };

  const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
    const isDisabled = String(className).includes('slick-disabled');
    const classNameWithouArrow = String(className).replace('slick-arrow ', '');

    return (
      <div
        className={classNameWithouArrow}
        style={{
          ...style, zIndex: 3, top: '32%', left: 0,
        }}
        onClick={onClick}
      >
        {isDisabled ? <img src={carouselArrowLeftDisabled} alt="" /> : <img src={carouselArrowLeft} alt="" />}

      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 1,
    speed: 600,
    variableWidth: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 320,
        settings: {
          centerMode: true,
          centerPadding: 0,
        },
      },
    ],
  };

  return (
    <styled.CarouselContainer>
      <Slider {...settings}>
        {children}
      </Slider>
    </styled.CarouselContainer>
  );
};

export default Carousel;
