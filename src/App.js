import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import StickhandleType from './StickhandleType';
import Timer from './Timer';

function App() {

    const types = ['Wide', 'Tight', 'Figure Eight', 'Freestyle', 'Toe Drag'];

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [number, updateNumber] = useState(0);
    const [type, setType] = useState(types[Math.floor(Math.random() * types.length)]);
    const [isStarting, setIsStarting] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [isCountdownOver, setIsCountdownOver] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
  
    function toggle() {
    setIsFirstRender(false);
    setIsActive(!isActive);
    setCountdown(3);
    if (isActive) {
      setIsStarting(false);
    } else if (!isActive) {
      setIsStarting(true);
    }
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    setTimeout(() => {
      setIsStarting(false);
      setIsCountdownOver(true);
      clearInterval(countdownInterval);
    }, 3000);
  }
  
    useEffect(() => {
      let interval = null;
      if (isActive && isCountdownOver) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        setIsGameOver(false);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
        updateNumber(0);
        setIsGameOver(true);
      }
      return () => clearInterval(interval);
    }, [isActive, isCountdownOver, seconds, number, isGameOver]);

    function reset() {
      setSeconds(0);
      updateNumber(0);
      setIsActive(false);
      setIsFirstRender(true);
      setIsStarting(false);
      setIsCountdownOver(false);
    }
  
    return (
      <>
        {isStarting ? (
          <>
            <h1>Get ready...</h1>
            <h1>{countdown}</h1>
          </>
        ) : isActive ? (
          <>
            <StickhandleType types={types} type={type} setType={setType} isActive={isActive} />
            <Counter number={number} updateNumber={updateNumber} isActive={isActive} />
          </>
        ) : isFirstRender ? (
          <>
          <h1>HEADSUP</h1>
          </>
        ) : (
          <h1>GAME OVER</h1>
        )}
        <Timer seconds={seconds} isActive={isActive} handleToggle={toggle} handleReset={reset} />
      </>
    );
  }
  
  export default App;