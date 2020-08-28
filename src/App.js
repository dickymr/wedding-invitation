import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Loader from './pages/Loader';

import { data } from './data';

const App = () => {
  const [loader, setLoader] = useState(true);

  const underconstuction = true;
  const lang = 'en';
  const data_lang = data[lang];

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);

    AOS.init({ delay: 250 });
    AOS.refresh();
  });

  return underconstuction ? (
    <>
      <p>Comming Soon</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyCdu5ZZ7BeuI5dczs-7qckn17P2BLq5HAEg&usqp=CAU"
        alt="img"
      />
    </>
  ) : (
    <div className="app">{loader ? <Loader /> : <Home data={data_lang} />}</div>
  );
};

export default App;
