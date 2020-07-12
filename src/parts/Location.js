import React from 'react';
import Title from '../components/Title';

const Location = () => {
  return (
    <section className="location container d-flex flex-column align-items-center">
      <Title title="Location" />
      <div className="row mt-5">
        <div className="col-lg-8">
          <iframe
            title="asi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.55364805038!2d107.74625761432877!3d-7.061613894899771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c1e8d269f0f3%3A0x8f2934dbcb5e2459!2sMaria%20Packing!5e0!3m2!1sid!2sid!4v1594135647062!5m2!1sid!2sid"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
        <div className="col-lg-4">ad</div>
      </div>
    </section>
  );
};

export default Location;
