import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

const Counter = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div className="h2">ONGOING</div>;
    } else {
      return (
        <>
          {Square(zeroPad(days), 'days')}
          {Square(zeroPad(hours), 'hours')}
          {Square(zeroPad(minutes), 'minutes')}
          {Square(zeroPad(seconds), 'seconds')}
        </>
      );
    }
  };

  const Square = (time, text) => {
    return (
      <div className="box d-flex flex-column justify-content-center align-items-center">
        <div className="times">{time}</div>
        <div className="text">{text}</div>
      </div>
    );
  };

  return (
    <div className="counter d-flex justify-content-around align-items-center">
      <Countdown
        date={1599267600000}
        daysInHours={true}
        renderer={renderer}
        zeroPadTime={2}
      />
    </div>
  );
};

export default Counter;
