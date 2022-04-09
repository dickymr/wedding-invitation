import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="mt-5">
      <p>{data.text}</p>
    </footer>
  );
};

export default Footer;
