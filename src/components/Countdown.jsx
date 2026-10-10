import { useEffect, useState } from 'react';
import { weddingData } from '../data/weddingData.js';
import './Countdown.css';

function getTimeLeft() {
  const target = new Date(weddingData.weddingDateISO).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="section center reveal">
      <span className="kicker">Almost There</span>
      <h2 className="heading">Counting Down to Forever</h2>
      <div className="divider" />
      <p className="sub">{weddingData.weddingDateLabel} • {weddingData.city}</p>
      <div className="countdown-grid">
        {units.map((u) => (
          <div className="countdown-unit" key={u.label}>
            <div className="countdown-num">{String(u.value).padStart(2, '0')}</div>
            <div className="countdown-label">{u.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
