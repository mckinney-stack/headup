import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import StickhandleType from './StickhandleType';
import Timer from './Timer';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { FormattedMessage } from 'react-intl';
import Language from './Language';



function App() {


    const types = ['wide', 'tight', 'figureEight', 'freestyle', 'toeDrag', 'leftLeg', 'rightLeg'];

    const { locale, selectLanguage } = useContext(LanguageContext);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [number, updateNumber] = useState(0);
    const [type, setType] = useState(types[Math.floor(Math.random() * types.length)]);
    const [isStarting, setIsStarting] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [isCountdownOver, setIsCountdownOver] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
  
    function handlePlay() {
    setIsFirstRender(false);
    setIsActive(!isActive);
    if (isActive) {
      setIsStarting(false);
    } else if (!isActive) {
      setIsStarting(true);
    }
    setCountdown(3);
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    setTimeout(() => {
      setIsStarting(false);
      setIsCountdownOver(true);
      clearInterval(countdownInterval);
    }, 3000);
  }
 
  function handleStop() {
    setIsActive(false);
  }
  
  useEffect(() => {
    let interval = null;
    if (isActive && isCountdownOver) {
        interval = setInterval(() => {
            setMilliseconds(milliseconds => milliseconds + 1);
            if (milliseconds % 1000 === 0) {
                setSeconds(seconds => seconds + 1);
            }
        }, 1);
        setIsGameOver(false);
    } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
        updateNumber(0);
        setIsGameOver(true);
    }
    return () => clearInterval(interval);
}, [isActive, isCountdownOver, seconds, milliseconds, number, isGameOver]);

    function reset() {
      setSeconds(0);
      setMilliseconds(0);
      updateNumber(0);
      setIsActive(false);
      setIsFirstRender(true);
      setIsStarting(false);
      setIsCountdownOver(false);
    }

    function formatTime(seconds, milliseconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      const remainingMilliseconds = Math.floor(milliseconds % 1000 / 10);
  
      const minutesStr = String(minutes).padStart(2, '0');
      const secondsStr = String(remainingSeconds).padStart(2, '0');
      const millisecondsStr = String(remainingMilliseconds).padStart(2, '0');
  
      return `${minutesStr}:${secondsStr}:${millisecondsStr}s`;
  }
  
    return (
      <>
        {isStarting ? (
          <>
            <h1>
              <FormattedMessage id="getReady" />
            </h1>
            <h1>{countdown}</h1>
          </>
        ) : isActive ? (
          <>
            <StickhandleType types={types} type={type} setType={setType} isActive={isActive} />
            <Counter number={number} updateNumber={updateNumber} isActive={isActive} />
          </>
        ) : isFirstRender ? (
          <>
          <h1>
            <FormattedMessage id="headUp" />
          </h1>
          </>
        ) : (
          <h1>
            <FormattedMessage id="gameOver" />
          </h1>
        )}
        <Timer seconds={formatTime(seconds, milliseconds)} isActive={isActive} isFirstRender={isFirstRender} handlePlay={handlePlay} handleStop={handleStop} handleReset={reset} />
        <Language />
      </>
    );
  }
  
  export default App;