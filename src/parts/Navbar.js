import React, { useState, useRef, useMemo } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-scroll';

const PositionStore = () => {
  const [renderCount, triggerReRender] = useState(0);
  const elementPosition = useRef({ x: 10, y: 150 });
  let throttleTimeout = null;

  const getPos = (el, axis) => Math.round(el.current[axis]);

  const setPos = (el, pos) => {
    el.current = pos;
    if (throttleTimeout !== null) return;
    // Only re-render the component every 0.3s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300);
  };

  return {
    getElementY: () => getPos(elementPosition, 'y'),
    setElementPosition: (pos) => setPos(elementPosition, pos),
    renderCount,
  };
};

const Navbar = ({ data }) => {
  const [isSticky] = useState(false);

  // const positionsStore = PositionStore();
  const redBoxRef = useRef(null);

  // Element scroll position
  useScrollPosition(
    ({ prevPos, currPos }) => {
      console.log(prevPos.y, currPos.y);
      // positionsStore.setElementPosition(currPos);
      // const isShow = currPos.y > prevPos.y;
      console.log(currPos.y < 0);
      // if (isShow !== isSticky) setIsticky(isShow);
      // if (currPos.y <= 0 && isSticky !== true) {
      //   setIsticky(true);
      // } else {
      //   setIsticky(false);
      // }
    },
    [],
    redBoxRef,
    false,
    300
  );

  console.log(PositionStore().getElementY());

  return useMemo(
    () => (
      <nav
        ref={redBoxRef}
        className={`navbar navbar-expand-sm ${isSticky ? 'sticky' : ''}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#Navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand pt-3 ml-5">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              <h2>{data.title}</h2>
            </Link>
          </div>
          <div className="collapse navbar-collapse mr-5" id="Navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="header"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <div className="nav-link">Home</div>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="couple"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <div className="nav-link">Couple</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="events"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <div className="nav-link">Events</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <div className="nav-link">Gallery</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="location"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}>
                  <div className="nav-link">Location</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ),

    [data.title, isSticky]
  );
};

export default Navbar;
