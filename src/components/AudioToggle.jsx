export default function AudioToggle({ playing, onToggle }) {
  return (
    <button
      className="floating-audio-btn"
      onClick={onToggle}
      aria-label={playing ? 'Pause background music' : 'Play background music'}
      title={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? '🔊' : '🔈'}
    </button>
  );
}
