import { weddingData } from '../data/weddingData.js';
import './InviteCard.css';

export default function InviteCard() {
  const { groom, bride } = weddingData;
  return (
    <section className="section center reveal">
      <span className="kicker">With Joy in Our Hearts</span>
      <h2 className="heading">We Cordially Invite You</h2>
      <div className="divider" />

      <div className="invite-card">
        <div className="invite-line">to the wedding of</div>

        <h3 className="invite-name">{groom.fullName}</h3>
        <div className="invite-parents">
          S/o {groom.fatherName} &amp; {groom.motherName}
        </div>

        <div className="invite-with">with</div>

        <h3 className="invite-name">{bride.fullName}</h3>
        <div className="invite-parents">
          D/o {bride.fatherName} &amp; {bride.motherName}
        </div>
      </div>
    </section>
  );
}
