import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';


const StyledTimer = styled.div`
  text-align: center;
  margin: 24px auto 96px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
`;

const TimeDisplay = styled.div`
  display: inline-block;
  text-align: center;
  font-family: 'Space Mono', monospace;
`;

export default function Timer({ userTime, isActive, isFirstRender, handlePlay, handleStop, handleReset, userName, isCountdownOver }) {
  return (
    <StyledTimer>
      {isFirstRender ? (
        <button onClick={handlePlay}><FormattedMessage id="play" /></button>
      ) : isActive ? (
        <button onClick={() => handleStop(userName, userTime, isCountdownOver)}><FormattedMessage id="stop" /></button>
      ) : (
        <button onClick={handleReset}><FormattedMessage id="reset" /></button>
      )}
      <TimeDisplay>{userTime}</TimeDisplay>
    </StyledTimer>
  );
}