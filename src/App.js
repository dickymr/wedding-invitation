import React from 'react';

import Home from './pages/Home';
import { data } from './data';

const App = () => {
  const lang = 'en';
  const data_lang = data[lang];

  return (
    <div className="app">
      <Home data={data_lang} />
    </div>
  );
};

export default App;
