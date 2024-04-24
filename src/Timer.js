export default function Timer({ seconds, isActive, handleToggle, handleReset }) {

    return (
      <div class="timer">
        <div>{seconds}s</div>
        <button onClick={handleToggle}>
          {isActive ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  }


