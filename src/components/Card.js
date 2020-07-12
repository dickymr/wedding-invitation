import React from 'react';

const iconCeremony = require('../assets/images/icons/ceremony.svg');
const iconReception = require('../assets/images/icons/reception.svg');

const Card = ({ data }) => {
  return (
    <div className="card col-md-6 d-flex flex-column justify-content-center align-items-center mb-5">
      <div className="place d-flex justify-content-center align-items-center mb-5">
        <img src={data.foto} alt="foto" />
        <div className="circle d-flex justify-content-center align-items-center">
          <img
            src={data.type === 'ceremony' ? iconCeremony : iconReception}
            alt="icon"
          />
        </div>
      </div>
      <div className="h3 title mb-3">{data.title}</div>
      <div className="h5 date">{data.date}</div>
      <div className="h5 time mb-3">{data.time}</div>
      <div className="h5 address">{data.address.line1}</div>
      <div className="h5 address">{data.address.line2}</div>
      <div className="h5 address">{data.address.line3}</div>
    </div>
  );
};

export default Card;
