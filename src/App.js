import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import StickhandleType from './StickhandleType';
import Timer from './Timer';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
  
    function toggle() {
        setIsActive(!isActive);   
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);
  
    return (
        <>
            {isGameOver ? (
                <h1>GAME OVER</h1>
            ) : (
                <>
                    <StickhandleType isActive={isActive} reset={reset} />
                </>
            )}
            <Counter isActive={isActive} reset={reset} />
            <Timer seconds={seconds} isActive={isActive} handleToggle={toggle} handleReset={reset} />
        </>
    );
  }
  
  export default App;