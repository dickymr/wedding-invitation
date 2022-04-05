import React, { useEffect, useState } from 'react';
import { Howler } from 'howler';

import Header from '../parts/Header';
import Navbar from '../parts/Navbar';
import Couple from '../parts/Couple';
import Events from '../parts/Events';
import Moment from '../parts/Moment';
import Location from '../parts/Location';
import Footer from '../parts/Footer';

const Home = ({ data }) => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        Howler.mute(false);
      } else {
        Howler.mute(true);
      }
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div className="home">
      <Navbar data={data.navbar} />
      <Header data={data.header} firstLoad={firstLoad} setFirstLoad={setFirstLoad} bgm={data.config.bgm} />
      {!firstLoad && (
        <>
          <Couple data={data.couple} />
          <Events data={data.events} />
          <Moment data={data.moment} />
          <Location data={data.location} />
          <Footer data={data.footer} />
        </>
      )}
    </div>
  );
};

export default Home;
