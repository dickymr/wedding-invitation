import React from 'react';
import Slider from 'react-slick';

import Counter from '../components/Counter';

const separator = require('../assets/images/icons/separator.svg');

const Header = ({ data }) => {
  const renderBackground = () => {
    const settings = {
      fade: true,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 7500,
      infinite: true,
      arrows: false,
    };

    return (
      <div className="container-fluid">
        <Slider {...settings}>
          {data.bgImage.map((ele, i) => (
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
      </div>
    );
  };

  return (
    <header id="header">
      {renderBackground()}
      {renderContent()}
      <div className="overlay"></div>
    </header>
  );
};

export default Header;
