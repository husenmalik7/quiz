import React, { useState, useEffect, useRef } from 'react';

function CountdownTimer({ onTimeUp }) {
  const savedTime = parseInt(localStorage.getItem('timer')) || 0;
  const [timeLeft, setTimeLeft] = useState(savedTime);
  const [isRunning, setIsRunning] = useState(false);
  const hasCalled = useRef(false);

  useEffect(() => {
    setIsRunning(true);
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        localStorage.setItem('timer', timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !hasCalled.current) {
      hasCalled.current = true;
      setIsRunning(false);
      onTimeUp();
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onTimeUp]);

  function formatTime(time) {
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold">{formatTime(timeLeft)}</h1>
    </div>
  );
}

export default CountdownTimer;
