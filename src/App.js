import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import { data } from './data';

const App = () => {
  const lang = 'en';
  const data_lang = data[lang];

  useEffect(() => {
    AOS.init({ delay: 250 });
    AOS.refresh();
  });

  return (
    <div className="app">
      <Home data={data_lang} />
    </div>
  );
};

export default App;
