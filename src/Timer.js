import styled from 'styled-components';

const StyledTimer = styled.div`
  text-align: center;
  margin: 24px auto 96px auto;
`;

export default function Timer({ seconds, isActive, isFirstRender, handlePlay, handleStop, handleReset }) {
  return (
    <StyledTimer>
      <div>{seconds}</div>
      {isFirstRender ? (
        <button onClick={handlePlay}>Play</button>
      ) : isActive ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </StyledTimer>
  );
}