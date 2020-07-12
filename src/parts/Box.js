// import React, { useState, useRef, useMemo } from 'react';
// import { useScrollPosition } from '@n8tb1t/use-scroll-position';

// const PositionStore = () => {
//   const [renderCount, triggerReRender] = useState(0);
//   const elementPosition = useRef({ x: 10, y: 150 });
//   let throttleTimeout = null;

//   const getPos = (el, axis) => Math.round(el.current[axis]);

//   const setPos = (el, pos) => {
//     el.current = pos;
//     if (throttleTimeout !== null) return;
//     // Only re-render the component every 0.3s
//     throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300);
//   };

//   return {
//     getElementY: () => getPos(elementPosition, 'y'),
//     setElementPosition: (pos) => setPos(elementPosition, pos),
//     renderCount,
//   };
// };

// const Boxz = () => {
//   const [state, setstate] = useState({
//     isFixed: false,
//   });
//   const positionsStore = PositionStore();
//   const redBoxRef = useRef(null);

//   // Element scroll position
//   useScrollPosition(
//     ({ currPos }) => {
//       console.log(currPos.y);
//       setstate({
//         ...state,
//         isFixed: currPos.y < 0 ? true : false,
//       });

//       positionsStore.setElementPosition(currPos);
//     },
//     [],
//     redBoxRef,
//     false,
//     300
//   );

//   return useMemo(
//     () => (
//       <div ref={redBoxRef} className={`boxz ${state.isFixed ? 'fixed' : ''}`}>
//         <h1>ASU</h1>
//         Y:{positionsStore.getElementY()}
//       </div>
//     ),
//     [positionsStore]
//   );
// };

// export default Boxz;
