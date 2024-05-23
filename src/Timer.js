import { FormattedMessage } from 'react-intl';
import { StyledButton, StyledTimer, TimeDisplay } from './StyledComponents';
import { FaPlay, FaStop } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function Timer({ userTime, isActive, isFirstRender, handlePlay, handleStop, handleReset, userName, isCountdownOver }) {
  return (
    <StyledTimer>
      {isFirstRender ? (
        <StyledButton id="play" onClick={handlePlay}><FormattedMessage id="play" /><FaPlay /></StyledButton>
      ) : isActive ? (
        <StyledButton id="stop" onClick={() => handleStop(userName, userTime, isCountdownOver)}><FormattedMessage id="stop" /><FaStop /></StyledButton>
      ) : (
        <StyledButton id="reset" onClick={handleReset}><FormattedMessage id="reset" /><GrPowerReset /></StyledButton>
      )}
      <TimeDisplay>{userTime}</TimeDisplay>
    </StyledTimer>
  );
}