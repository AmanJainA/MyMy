import { weddingData } from '../data/weddingData.js';
import './BlessingsClosing.css';

export default function BlessingsClosing() {
  return (
    <section className="section blessing-section reveal">
      <span className="kicker">With Gratitude</span>
      <h2 className="heading">Blessed By You</h2>
      <div className="divider" />

      <div className="blessing-card">
        <p className="blessing-quote">
          "Every blessing whispered for us, every wish sent our way, becomes a part of the
          story we're about to begin. Thank you for being a part of our journey."
        </p>
        <div className="blessing-names">
          {weddingData.groom.firstName} &amp; {weddingData.bride.firstName}
        </div>
        <div className="blessing-sub">{weddingData.weddingDateLabel}</div>
      </div>
    </section>
  );
}
