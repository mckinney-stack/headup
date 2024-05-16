import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter';
import StickhandleType from './StickhandleType';
import Timer from './Timer';
import UserName from './UserName';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { FormattedMessage } from 'react-intl';
import Language from './Language';
import { StyledH1, StyledH6, StyledFaHockeyPuck, StyledFaHockeyPuckIn, StyledFaHockeyPuckOut } from './StyledComponents';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


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

    const userTime = formatTime(seconds, milliseconds);

    const countdownIntervalRef = useRef(null);
    const countdownTimeoutRef = useRef(null);

    function isValidUserName(userName) {
      const words = userName.trim().split(' ');
      return words.length >= 2;
    }
  
    function handlePlay() {

      if (!userName) {
        window.alert('Please enter your name to play the game!');
        return;
      } 
      if (!isValidUserName(userName)) {
        window.alert('Please enter your full name to play the game!');
        return;
      }

      setIsFirstRender(false);
      setIsActive(!isActive);
      if (isActive) {
        setIsStarting(false);
      } else if (!isActive) {
        setIsStarting(true);
      }
      countdownIntervalRef.current = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      countdownTimeoutRef.current = setTimeout(() => {
        setIsStarting(false);
        setIsCountdownOver(true);
        clearInterval(countdownIntervalRef.current);
      }, 3000);
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
 
function handleStop(userName, userTime, isCountdownOver) {
  setIsActive(false);

  if (countdownIntervalRef.current) {
    clearInterval(countdownIntervalRef.current);
  }
  if (countdownTimeoutRef.current) {
    clearTimeout(countdownTimeoutRef.current);
  }

  if (!isCountdownOver) {
    reset();
    return;
  }
  
  console.log('hello');

  // Write data to firebase
  set(ref(database, 'users/' + userName), {
    username: userName,
    time: userTime
  })
  .then(() => {
    console.log("Data written successfully!");
  })
  .catch((error) => {
    console.error("Error writing data: ", error);
  });
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
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (countdownTimeoutRef.current) {
        clearTimeout(countdownTimeoutRef.current);
      }
      setSeconds(0);
      setMilliseconds(0);
      setIsActive(false);
      updateNumber(0);
      setType(types[Math.floor(Math.random() * types.length)]);
      setIsStarting(false);
      setCountdown(3);
      setIsCountdownOver(false);
      setIsFirstRender(true);
      setUserName('');
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
        <Timer userTime={userTime} isActive={isActive} isFirstRender={isFirstRender} handlePlay={handlePlay} handleStop={handleStop} handleReset={reset} userName={userName} isCountdownOver={isCountdownOver} />
        <Language />
        <UserName userName={userName} setUserName={setUserName} />
      </>
    );
  }
  
  export default App;