export default function Timer({ seconds, isActive, isFirstRender, handlePlay, handleStop, handleReset }) {
  return (
    <div class="timer">
      <div>{seconds}</div>
      {isFirstRender ? (
        <button onClick={handlePlay}>Play</button>
      ) : isActive ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
}