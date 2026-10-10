import { useState } from 'react';
import TajMahalIllustration from '../assets/TajMahalIllustration.jsx';
import { weddingData } from '../data/weddingData.js';
import './GateIntro.css';

export default function GateIntro({ onOpen, audioRef }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);

    // Play the background song right inside the click handler so it
    // counts as a user gesture and browsers allow audio with sound.
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.play().catch(() => {
        /* Autoplay can still be blocked on some browsers — the visible
           floating audio button lets the guest start it manually. */
      });
    }

    // Let the gate + Taj Mahal reveal animation play out, then hand off
    // to the rest of the site.
    window.setTimeout(() => {
      setHidden(true);
      onOpen();
    }, 3200);
  };

  return (
    <div className={`gate-screen${hidden ? ' hidden' : ''}`}>
      <div className="gate-title">You are lovingly invited</div>

      <div
        className={`gate-frame${open ? ' open' : ''}`}
        role="button"
        tabIndex={0}
        aria-label="Tap the seal to open the wedding gate"
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen();
        }}
      >
        <div className="gate-door left" />
        <div className="gate-door right" />
        <div className="gate-glow" />

        <div className="taj-reveal">
          <TajMahalIllustration />
          <div className="names">
            {weddingData.groom.fullName} weds {weddingData.bride.fullName}
          </div>
        </div>

        <div className="ribbon-wrap">
          <div className="ribbon-band" />
          <div className="seal-circle">
            <span className="seal-monogram">{weddingData.monogram}</span>
          </div>
        </div>
      </div>

      <div className="gate-hint">Tap the seal to open</div>
    </div>
  );
}
