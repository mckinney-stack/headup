import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import StickhandleType from './StickhandleType';
import Timer from './Timer';
import UserName from './UserName';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { FormattedMessage } from 'react-intl';
import Language from './Language';
import { StyledH1, StyledH6, StyledFaHockeyPuck, StyledFaHockeyPuckIn, StyledFaHockeyPuckOut } from './StyledComponents';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByu8fnO6M-GQszcDFGkDCtV9nfoDI81qA",
  authDomain: "head-up-6f17c.firebaseapp.com",
  projectId: "head-up-6f17c",
  storageBucket: "head-up-6f17c.appspot.com",
  messagingSenderId: "98025372188",
  appId: "1:98025372188:web:17321f0c8a3425d9947dd9",
  measurementId: "G-B59FYS44L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {

    const types = ['wide', 'narrow', 'figureEight', 'freestyle', 'leftLeg', 'rightLeg'];

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
    const [userName, setUserName] = useState('');
  
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

  function handleSubmit(e) {
    e.preventDefault();
  
    // // Get a reference to the database service
    // const database = getDatabase();
  
    // // Write data
    // set(ref(database, 'users/' + name), {
    //   username: name,
    //   time: seconds
    // });
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
            <StyledH6>
              <FormattedMessage id="getReady" />
            </StyledH6>
            <StyledH1>{countdown}</StyledH1>
          </>
        ) : isActive ? (
          <>
            <StickhandleType types={types} type={type} setType={setType} isActive={isActive} />
            <Counter number={number} updateNumber={updateNumber} isActive={isActive} />
          </>
        ) : isFirstRender ? (
          <>
          <StyledH1>
            <FormattedMessage id="headUp" /><StyledFaHockeyPuckIn />
          </StyledH1>
          </>
        ) : (
          <StyledH1>
            <FormattedMessage id="gameOver" /><StyledFaHockeyPuckOut />
          </StyledH1>
        )}
        <Timer seconds={formatTime(seconds, milliseconds)} isActive={isActive} isFirstRender={isFirstRender} handlePlay={handlePlay} handleStop={handleStop} handleReset={reset} />
        <Language />
        <UserName userName={userName} setUserName={setUserName} onSubmit={handleSubmit}/>
      </>
    );
  }
  
  export default App;