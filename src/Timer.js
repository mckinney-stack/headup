import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';


const StyledTimer = styled.div`
  text-align: center;
  margin: 24px auto 96px auto;
`;

export default function Timer({ userTime, isActive, isFirstRender, handlePlay, handleStop, handleReset, userName, isCountdownOver }) {
  return (
    <StyledTimer>
      <div>{userTime}</div>
      {isFirstRender ? (
        <button onClick={handlePlay}><FormattedMessage id="play" /></button>
      ) : isActive ? (
        <button onClick={() => handleStop(userName, userTime, isCountdownOver)}><FormattedMessage id="stop" /></button>
      ) : (
        <button onClick={handleReset}><FormattedMessage id="reset" /></button>
      )}
    </StyledTimer>
  );
}