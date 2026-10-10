import TajMahalIllustration from '../assets/TajMahalIllustration.jsx';
import { weddingData } from '../data/weddingData.js';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="kicker">Once upon a time...</div>
      <h1>
        {weddingData.groom.firstName}
        <span className="amp">&amp;</span>
        {weddingData.bride.firstName}
      </h1>
      <div className="tagline">are tying the knot in the Pink City</div>
      <div className="hero-taj">
        <TajMahalIllustration />
      </div>
      <div className="scroll-cue">Scroll down ↓</div>
    </section>
  );
}
