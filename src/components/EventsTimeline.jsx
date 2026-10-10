import { weddingData } from '../data/weddingData.js';
import { EVENT_ICONS, IconMap } from './icons/EventIcons.jsx';
import './EventsTimeline.css';

export default function EventsTimeline() {
  return (
    <section className="section center">
      <span className="kicker">The Celebrations</span>
      <h2 className="heading">Wedding Events</h2>
      <div className="divider" />
      <p className="sub">Every function, every colour, every song — here's what's in store.</p>

      <div className="timeline">
        {weddingData.events.map((ev, i) => {
          const Icon = EVENT_ICONS[ev.icon] || EVENT_ICONS.music;
          const side = i % 2 === 0 ? 'left' : 'right';
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            ev.mapsSearchQuery
          )}`;
          return (
            <div className={`tl-item ${side}`} key={ev.key}>
              <div className="tl-card">
                <div className="tl-icon">
                  <Icon />
                </div>
                <h3 className="tl-name">{ev.name}</h3>
                <div className="tl-meta">
                  {ev.date} • {ev.time}
                </div>
                <p className="tl-desc">{ev.desc}</p>
                <div className="tl-tags">
                  <span className="tl-tag">Dress code: {ev.dressCode}</span>
                </div>
                <a className="tl-venue-btn" href={mapsUrl} target="_blank" rel="noreferrer">
                  <IconMap /> {ev.venueName}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
