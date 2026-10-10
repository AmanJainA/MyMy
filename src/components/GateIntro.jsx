import { useState } from 'react';
import { weddingData } from '../data/weddingData.js';
import './GateIntro.css';

export default function GateIntro({ onOpen, audioRef }) {
  const [password, setPassword] = useState('');
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
  };

  const handleOpen = () => {
    if (!unlocked || open || busy) return;
    setBusy(true);
    setOpen(true);

    if (audioRef?.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {});
    }

    window.setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <main className={`gate-screen${open ? ' gate-screen-opening' : ''}`}>
      <div className="invitation-cover">
        <div className="floral-corner floral-corner-tl" aria-hidden="true">❧ ❀ ❧</div>
        <div className="floral-corner floral-corner-tr" aria-hidden="true">❧ ❀ ❧</div>
        <div className="floral-corner floral-corner-bl" aria-hidden="true">❧ ❀ ❧</div>
        <div className="floral-corner floral-corner-br" aria-hidden="true">❧ ❀ ❧</div>
        <div className="cover-inner">
          <div className="cover-topline">A PRIVATE INVITATION</div>
          <div className="cover-ornament" aria-hidden="true">— ❦ —</div>
          <p className="cover-eyebrow">With love, we invite you to share</p>
          <h1 className="cover-title">A beautiful beginning</h1>
          <p className="cover-subtitle">A celebration of love, family & forever</p>

          {!unlocked ? (
            <form className="password-panel" onSubmit={handleUnlock}>
              <div className="oval-seal" aria-hidden="true">
                <span className="seal-flower">❀</span>
                <span className="seal-initials">{weddingData.monogram}</span>
              </div>
              <label htmlFor="invitation-password">ENTER YOUR SECRET PASSWORD</label>
              <input
                id="invitation-password"
                type="password"
                value={password}
                onChange={(event) => { setPassword(event.target.value); setError(false); }}
                placeholder="Enter password"
                autoComplete="current-password"
                aria-invalid={error}
                aria-describedby={error ? 'password-error' : undefined}
                autoFocus
              />
              {error && <p className="password-error" id="password-error">That password doesn’t look right. Please try again.</p>}
              <button className="cover-button" type="submit">Unlock invitation <span aria-hidden="true">♡</span></button>
            </form>
          ) : (
            <button className="invitation-seal-button" type="button" onClick={handleOpen} aria-label="Open the wedding invitation">
              <span className="oval-seal oval-seal-ready">
                <span className="seal-flower">❀</span>
                <span className="seal-initials">{weddingData.monogram}</span>
              </span>
              <span className="open-prompt">Tap the floral seal to open</span>
            </button>
          )}

          <div className="cover-bottom">
            <span className="cover-rule" />
            <span>MADE WITH LOVE</span>
            <span className="cover-rule" />
          </div>
        </div>
      </div>
    </main>
  );
}
