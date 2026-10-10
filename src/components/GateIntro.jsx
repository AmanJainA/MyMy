import { useState } from 'react';
import './GateIntro.css';

export default function GateIntro({ onOpen, audioRef }) {
  const [password, setPassword] = useState('');
  const [showLock, setShowLock] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleUnlock = (event) => {
    event.preventDefault();
    if (password !== '1234@Aman') {
      setError(true);
      return;
    }
    setError(false);
    setUnlocked(true);
    setShowLock(false);
  };

  const handleOpen = () => {
    if (!unlocked || open || busy) return;
    setBusy(true);
    setOpen(true);
    if (audioRef?.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {});
    }
    window.setTimeout(() => onOpen?.(), 1900);
  };

  return (
    <main className={`gate-screen${open ? ' gate-screen-opening' : ''}`}>
      <section className={`ornate-gate${open ? ' is-opening' : ''}`} aria-label="Private invitation gate">
        <div className="gate-leaf gate-leaf-left">
          <div className="gate-emboss gate-emboss-left" aria-hidden="true">
            <span className="emboss-flower flower-one">✿</span>
            <span className="emboss-flower flower-two">❀</span>
            <span className="emboss-flower flower-three">✿</span>
            <span className="emboss-sprig sprig-one">❧</span>
            <span className="emboss-sprig sprig-two">❦</span>
          </div>
          <span className="gate-panel-line" />
        </div>
        <div className="gate-leaf gate-leaf-right">
          <div className="gate-emboss gate-emboss-right" aria-hidden="true">
            <span className="emboss-flower flower-one">✿</span>
            <span className="emboss-flower flower-two">❀</span>
            <span className="emboss-flower flower-three">✿</span>
            <span className="emboss-sprig sprig-one">❧</span>
            <span className="emboss-sprig sprig-two">❦</span>
          </div>
          <span className="gate-panel-line" />
        </div>

        <div className="gate-arch-frame" aria-hidden="true" />
        <div className="gate-center">
          <div className="gate-center-rule" aria-hidden="true" />
          {!unlocked ? (
            <button className="gate-medallion" type="button" onClick={() => setShowLock(true)} aria-label="Enter password to unlock invitation">
              <span className="medallion-initials" aria-hidden="true"><span className="initial-a">A</span><span className="initial-n">N</span></span>
              <span className="medallion-flourish" aria-hidden="true">❦</span>
            </button>
          ) : (
            <button className="gate-medallion unlocked-medallion" type="button" onClick={handleOpen} aria-label="Open the invitation">
              <span className="medallion-bloom" aria-hidden="true">❦</span>
              <span className="medallion-stem" aria-hidden="true">♧</span>
            </button>
          )}
          <div className="gate-hint">{unlocked ? 'Tap the seal to open' : 'A private invitation'}</div>
        </div>

        {showLock && !unlocked && (
          <div className="lock-backdrop">
            <form className="gate-lock-card" onSubmit={handleUnlock}>
              <button className="lock-close" type="button" onClick={() => { setShowLock(false); setError(false); }} aria-label="Close password form">×</button>
              <span className="lock-card-ornament" aria-hidden="true">❦</span>
              <h1>By invitation only</h1>
              <p>Please enter your password to continue.</p>
              <label htmlFor="gate-password">INVITATION PASSWORD</label>
              <input id="gate-password" type="password" value={password} onChange={(event) => { setPassword(event.target.value); setError(false); }} placeholder="Enter password" autoComplete="current-password" autoFocus aria-invalid={error} aria-describedby={error ? 'gate-password-error' : undefined} />
              {error && <p className="gate-password-error" id="gate-password-error">Incorrect password. Please try again.</p>}
              <button className="gate-unlock-button" type="submit">Unlock invitation <span aria-hidden="true">♡</span></button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
