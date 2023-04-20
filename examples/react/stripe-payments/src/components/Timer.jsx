import React, { useState, useEffect } from 'react';

const diference = time => {
  if (!time) {
    return 0;
  }
  const diff = time - new Date().getTime();
  if (diff < 0) {
    return 0;
  }
  return diff;
};

const Timer = ({ setDisable }) => {
  const startTimer =
    new Date().getTime() + 60000 * Math.ceil(Math.random() * 20);
  const [end] = useState(startTimer);
  const [timeLeft, setTimeLeft] = useState(startTimer);

  useEffect(() => {
    setTimeLeft(diference(end));
    const timer = setInterval(() => {
      const targetLeft = diference(end);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        setDisable(true);
      }
    });
    return () => clearInterval(timer);
  }, [end]);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  return (
    <p>
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span>:</span>
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </p>
  );
};

export default Timer;
