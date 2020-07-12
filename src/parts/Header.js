import React from 'react';
// import { Parallax } from 'react-parallax';

import Counter from '../components/Counter';
// import { paralelNumber } from '../utils/helper';

const separator = require('../assets/images/icons/separator.svg');

const Header = ({ data }) => {
  // const [state, setstate] = useState({
  //   toggle: true,
  //   bgIndex: 0,
  // });

  const renderContent = () => {
    return (
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col text-center">
            <div className="h1 mb-3">{data.bridegroom}</div>
            <div className="h4">{data.desc}</div>
            <div className="separator">
              <img src={separator} alt="separator" />
            </div>
            <div className="h4 mb-5">{data.date}</div>
            <Counter />
          </div>
        </div>
      </div>
    );
  };

  // useEffect(() => {
  //   const changeBackground = setInterval(() => {
  //     setstate((prevstate) => {
  //       return {
  //         ...prevstate,
  //         bgIndex: paralelNumber(prevstate.bgIndex, data.bgImage.length),
  //       };
  //     });
  //   }, 5000);
  //   return () => {
  //     clearInterval(changeBackground);
  //   };
  //   // eslint-disable-next-line
  // }, []);

  // const { bgIndex } = state;

  return (
    <header id="header">
      {/* <Parallax
        blur={1}
        bgClassName={''}
        bgImage={data.bgImage[bgIndex]}
        strength={750}> */}
      {/* <Parallax
          blur={1}
          bgClassName={'fadeOut'}
          bgImage={
            data.bgImage[
              bgIndex - 1 >= 0 ? bgIndex - 1 : data.bgImage.length - 1
            ]
          }
          strength={750}>
          {renderContent()}
        </Parallax> */}
      {/* </Parallax> */}
      {renderContent()}
    </header>
  );
};

export default Header;
