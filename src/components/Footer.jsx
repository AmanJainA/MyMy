import { weddingData } from '../data/weddingData.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="script">
        {weddingData.groom.firstName} weds {weddingData.bride.firstName}
      </div>
      <div className="meta">
        {weddingData.weddingDateLabel} • {weddingData.city}
      </div>
      <small>Made with love, gold thread &amp; a little bit of code</small>
    </footer>
  );
}
