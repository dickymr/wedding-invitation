import React from 'react';
import Slider from 'react-slick';
import useScrollPosition from '@react-hook/window-scroll';

import Counter from '../components/Counter';

const separator = require('../assets/images/icons/separator.svg');

const Header = ({ data }) => {
  const renderBackground = () => {
    const settings = {
      fade: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      arrows: false,
    };

    const isPortrait = window.innerHeight > window.innerWidth;
    const backgrounds = isPortrait
      ? data.bgImagePortrait
      : data.bgImageLandscape;

    return (
      <div className="container-fluid">
        <Slider {...settings}>
          {backgrounds.map((ele, i) => (
            <div key={i} className="background">
              <img src={ele} alt={`bg-${i}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div
        className="content container-fluid d-flex flex-column justify-content-center align-items-center"
        data-aos="zoom-in-up"
        data-aos-duration="1500">
        <div className="row">
          <div className="col text-center">
            <div className="name mb-3">{data.bridegroom}</div>
            <div className="desc">{data.desc}</div>
            <div className="separator">
              <img src={separator} alt="separator" />
            </div>
            <div className="date h4 mb-5">{data.date}</div>
            <Counter data={data} />
          </div>
        </div>
        {scrollY < 200 && (
          <div className="animated infinite bounce slow arrow">
            <img
              src={require('../assets/images/icons/arrow.png')}
              alt="arrow"
            />
          </div>
        )}
      </div>
    );
  };

  const scrollY = useScrollPosition(60);

  return (
    <header id="header">
      {renderBackground()}
      {renderContent()}
      <div className="overlay"></div>
    </header>
  );
};

export default Header;
