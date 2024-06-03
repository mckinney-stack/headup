import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter';
import StickhandleType from './StickhandleType';
import Timer from './Timer';
import UserName from './UserName';
import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { FormattedMessage } from 'react-intl';
import Language from './Language';
import { StyledH1, StyledH1Number, StyledH6, StyledFaHockeyPuck, StyledFaHockeyPuckIn, StyledFaHockeyPuckOut, AnimatedText } from './StyledComponents';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase, ref, set, get } from "firebase/database";
import { styled } from 'styled-components';
import { useIntl } from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
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
*/

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  height: 50vh; 
  text-align: center; 
  margin-bottom: 96px;
`;

function App() {

    const intl = useIntl();

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
    const [isPlayHovered, setIsPlayHovered] = useState(false);
    const [animationStage, setAnimationStage] = useState('1');


    const userTime = formatTime(seconds, milliseconds);

    const countdownIntervalRef = useRef(null);
    const countdownTimeoutRef = useRef(null);

    function isValidUserName(userName) {
      const words = userName.trim().split(' ');
      return words.length >= 2;
    }

    const toastOne = () => toast(intl.formatMessage({ id: 'enterName' }), {
      position: "bottom-right", 
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: false,
      progressStyle: { background: 'red' },
    });
    const toastTwo = () => toast(intl.formatMessage({ id: 'enterFullName' }), {
      position: "bottom-right", 
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: false,
      progressStyle: { background: 'red' },
    });
  
    function handlePlay() {

      if (!userName) {
        toastOne();
        return;
      } 
      if (!isValidUserName(userName)) {
        toastTwo();
        return;
      }

      setAnimationStage('3');

      setTimeout(() => {
        setIsFirstRender(false);
        setIsActive(!isActive);
        if (isActive) {
          setIsStarting(false);
        } else if (!isActive) {
          setIsStarting(true);
        }
        setTimeout(() => {
          countdownIntervalRef.current = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
          }, 1000);
          countdownTimeoutRef.current = setTimeout(() => {
            setIsStarting(false);
            setIsCountdownOver(true);
            clearInterval(countdownIntervalRef.current);
          }, 3000);
        }, 400);
      }, 1000);
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
  
  setAnimationStage('4');

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

  setIsActive(false);
  
  // Write data to firebase
  // set(ref(database, 'users/' + userName), {
  //   username: userName,
  //   time: userTime
  // })
  // .then(() => {
  //   console.log("Data written successfully!");
  // })
  // .catch((error) => {
  //   console.error("Error writing data: ", error);
  // });

  // Display data from firebase in console - use this functionality for "leaderboard" tab
  // get(ref(database, 'users/')).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

}
  
useEffect(() => {
  let interval = null;
  let startTime = null;
  if (isActive && isCountdownOver) {
      startTime = Date.now();
      interval = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const elapsedSeconds = Math.floor(elapsedTime / 1000);
          const elapsedMilliseconds = elapsedTime % 1000;
          setSeconds(elapsedSeconds);
          setMilliseconds(elapsedMilliseconds);
          setIsGameOver(false);
      }, 1);
  } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
      updateNumber(0);
      setIsGameOver(true);
  }
  return () => clearInterval(interval);
}, [isActive, isCountdownOver]);

    function reset() {

      setAnimationStage('5');

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
      // setUserName(''); - commented out to make testing easier
      setAnimationStage('1');
    }
  
    return (
      <>
      <ToastContainer />
      <CenteredContainer>
        {isStarting ? (
          <>
            <StyledH6 className="animate">
              <FormattedMessage id="getReady" />
            </StyledH6>
            <StyledH1Number className="countdown">{countdown}</StyledH1Number>
          </>
        ) : isActive ? (
          <>
            <StickhandleType types={types} type={type} setType={setType} isActive={isActive} animationStage={animationStage} />
            <Counter number={number} updateNumber={updateNumber} isActive={isActive} animationStage={animationStage} />
          </>
        ) : isFirstRender ? (
          <>
          <StyledH1>
                <AnimatedText $shouldMove={animationStage === '3'}>
                  <FormattedMessage id="headUp" />
                </AnimatedText>
                {animationStage === '1' && <StyledFaHockeyPuckIn onAnimationEnd={() => setAnimationStage('2')} />}
                {animationStage === '2' && <StyledFaHockeyPuck className={isPlayHovered ? 'wobble' : ''} onAnimationEnd={() => setAnimationStage('3')} />}
                {animationStage === '3' && <StyledFaHockeyPuckOut />}
            </StyledH1>
          </>
        ) : (
          <StyledH1 className="gameOver">
            <FormattedMessage id="gameOver" />
          </StyledH1>
        )}
       </CenteredContainer>
       <Timer 
  $shouldMove={animationStage === '3'}
  $shouldFade={animationStage === '3' || animationStage === '5'}
  userTime={userTime} 
  isActive={isActive} 
  isFirstRender={isFirstRender} 
  handlePlay={handlePlay} 
  handleStop={handleStop} 
  handleReset={reset} 
  userName={userName} 
  isCountdownOver={isCountdownOver} 
  onMouseEnter={() => setIsPlayHovered(true)} 
  onMouseLeave={() => setIsPlayHovered(false)}
/>        
        <Language $shouldHide={animationStage === '3' || animationStage === '4'} />
        <UserName userName={userName} setUserName={setUserName} $shouldHide={animationStage === '3' || animationStage === '4'} />
      </>
    );
  }
  
export default App;