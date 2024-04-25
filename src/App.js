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

  
    function toggle() {
        setIsActive(!isActive);   
    }
  
    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        setIsGameOver(false);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
        updateNumber(0);
        setIsActive(false);
        setIsGameOver(true);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds, number, isGameOver]);

    function reset() {
      setSeconds(0);
      updateNumber(0);
      setIsActive(false);
    }
  
    return (
        <>
            {isGameOver ? (
                <h1>GAME OVER</h1>
            ) : (
                <>
                    <StickhandleType types={types} type={type} setType={setType} isActive={isActive} reset={reset} />
                </>
            )}
            <Counter number={number} updateNumber={updateNumber} isActive={isActive} reset={reset} />
            <Timer seconds={seconds} isActive={isActive} handleToggle={toggle} handleReset={reset} />
        </>
    );
  }
  
  export default App;