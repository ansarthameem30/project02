import React, { useRef, useState, useEffect } from "react";

const Timer = () => {
  const interval = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    if (interval.current === null) {
      interval.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    interval.current = null;
  };

  const resetTimer = () => {
    clearInterval(interval.current);
    interval.current = null;
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="container">
        <div className="container-a">
      <h1>Timer</h1>
      <p>Seconds: {seconds}</p>
      </div>

      <div className="button">
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
    </div>
  );
};

export default Timer;
