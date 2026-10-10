import { useRef, useState } from 'react';
import GateIntro from './components/GateIntro.jsx';
import Hero from './components/Hero.jsx';
import InviteCard from './components/InviteCard.jsx';
import ScratchCardHeart from './components/ScratchCardHeart.jsx';
import Countdown from './components/Countdown.jsx';
import EventsTimeline from './components/EventsTimeline.jsx';
import WishesForm from './components/WishesForm.jsx';
import BlessingsClosing from './components/BlessingsClosing.jsx';
import Footer from './components/Footer.jsx';
import AudioToggle from './components/AudioToggle.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';
import { weddingData } from './data/weddingData.js';

export default function App() {
  const [siteVisible, setSiteVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  // Re-scan for .reveal / .tl-item elements once the gate opens and the
  // rest of the page mounts into the DOM.
  useScrollReveal([siteVisible]);

  const handleGateOpen = () => {
    setSiteVisible(true);
    setPlaying(true);
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      {/* Background wedding song — add your own licensed track at
          public/audio/wedding-song.mp3 (see README.md). Not included
          here since music is copyrighted. */}
      <audio ref={audioRef} src={weddingData.songSrc} loop />

      <GateIntro onOpen={handleGateOpen} audioRef={audioRef} />

      {siteVisible && (
        <>
          <Hero />
          <InviteCard />
          <ScratchCardHeart />
          <Countdown />
          <EventsTimeline />
          <WishesForm />
          <BlessingsClosing />
          <Footer />
          <AudioToggle playing={playing} onToggle={toggleAudio} />
        </>
      )}
    </>
  );
}
