import { FormattedMessage } from 'react-intl';
import { StyledButton, StyledTimer, TimeDisplay } from './StyledComponents';
import { FaPlay, FaStop } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";



export default function Timer({ $shouldMove, $shouldFade, userTime, isActive, isFirstRender, handlePlay, handleStop, handleReset, userName, isCountdownOver, onMouseEnter, onMouseLeave }) {
  return (
    <StyledTimer isFirstRender={isFirstRender}>
      {isFirstRender ? (
        <StyledButton $shouldMove={$shouldMove} id="play" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handlePlay}><FormattedMessage id="play" className="formatted-message" /><FaPlay /></StyledButton>
      ) : isActive ? (
        <StyledButton $shouldMove={$shouldMove} id="stop" onClick={() => handleStop(userName, userTime, isCountdownOver)}><FormattedMessage id="stop" className="formatted-message" /><FaStop /></StyledButton>
      ) : (
        <StyledButton id="reset" onClick={handleReset}><FormattedMessage id="reset" className="formatted-message" /><GrPowerReset /></StyledButton>
      )}
      <TimeDisplay $shouldFade={$shouldFade}>{userTime}</TimeDisplay>
    </StyledTimer>
  );
}