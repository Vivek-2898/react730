import React, { useState, useEffect } from 'react';
import './CountDownTimer.css';

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerCompleted, setTimerCompleted] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let intervalId;
    if (timerActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && timerActive) {
      clearInterval(intervalId);
      setTimerCompleted(true);
      setTimerActive(false);
    }

    return () => clearInterval(intervalId);
  }, [timerActive, seconds]);

  const startTimer = (durationInSeconds) => {
    setSeconds(durationInSeconds);
    setTimerActive(true);
    setTimerCompleted(false);
    setDuration(durationInSeconds);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setTimerActive(false);
    setTimerCompleted(false);
  };

  const handleButtonClick = (duration) => {
    const durationInSeconds = duration * 60;
    startTimer(durationInSeconds);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="countdown-container">
      <h1>Countdown Timer</h1>
      <div className="buttons-container">
        <button onClick={() => handleButtonClick(5)}>5 Minutes</button>
        <button onClick={() => handleButtonClick(10)}>10 Minutes</button>
        <button onClick={() => handleButtonClick(20)}>20 Minutes</button>
      </div>
      <div>
        {timerCompleted && !timerActive && seconds === 0 && (
          <p className="timer-message">Time Completed!</p>
        )}
        {!timerCompleted && (
          <p>Time Remaining: {formatTime(seconds)}</p>
        )}
      </div>
      <div className="button-container">
        <button onClick={timerActive ? stopTimer : null} disabled={!timerActive}>
          Stop
        </button>
        <button onClick={resetTimer} disabled={!timerActive && seconds === 0}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
