import { useCallback, useEffect, useState } from 'react';
import { supabase, supabaseConfigured } from '../supabaseClient.js';
import './WishesForm.css';

export default function WishesForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishes = useCallback(async () => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('wishing_notes')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(60);
    if (!error && data) setWishes(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchWishes();
  }, [fetchWishes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatus({ ok: false, text: 'Please add your name and a little note for the couple.' });
      return;
    }
    if (!supabaseConfigured) {
      setStatus({
        ok: false,
        text: 'Supabase is not connected yet — add VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY to your .env file.',
      });
      return;
    }
    setSubmitting(true);
    setStatus(null);
    const { error } = await supabase
      .from('wishing_notes')
      .insert({ name: name.trim(), message: message.trim(), attending });
    setSubmitting(false);
    if (error) {
      setStatus({ ok: false, text: 'Something went wrong sending your wish. Please try again.' });
    } else {
      setStatus({ ok: true, text: 'Your wish has been sent with love 💛' });
      setName('');
      setMessage('');
      setAttending(null);
      fetchWishes();
    }
  };

  return (
    <section className="section center reveal">
      <span className="kicker">For the Newlyweds</span>
      <h2 className="heading">Leave Us a Wish</h2>
      <div className="divider" />
      <p className="sub">Every message means the world to us — leave yours below.</p>

      {!supabaseConfigured && (
        <div className="config-warning">
          Running in preview mode — connect Supabase (see README.md) to store real messages.
        </div>
      )}

      <form className="wishes-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="wish-name">Your name</label>
          <input
            id="wish-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priya Sharma"
            maxLength={60}
          />
        </div>
        <div className="field">
          <label htmlFor="wish-msg">Your wish for the couple</label>
          <textarea
            id="wish-msg"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Wishing you a lifetime of love and laughter..."
            maxLength={400}
          />
        </div>
        <div className="field">
          <label>Will you be joining us?</label>
          <div className="attend-toggle">
            <button
              type="button"
              className={attending === true ? 'active' : ''}
              onClick={() => setAttending(true)}
            >
              Yes, joyfully!
            </button>
            <button
              type="button"
              className={attending === false ? 'active' : ''}
              onClick={() => setAttending(false)}
            >
              Can't make it
            </button>
          </div>
        </div>
        <button className="submit-btn" type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Send Wish ✦'}
        </button>
        {status && <div className={`form-msg ${status.ok ? 'ok' : 'err'}`}>{status.text}</div>}
      </form>

      <div className="wishes-grid">
        {loading && <div className="empty-wishes">Loading wishes...</div>}
        {!loading && wishes.length === 0 && (
          <div className="empty-wishes">Be the first to leave a wish 💛</div>
        )}
        {!loading &&
          wishes.map((w, i) => (
            <div className="wish-card" key={w.id || i}>
              <div className="wish-name">🪔 {w.name}</div>
              <div className="wish-msg">{w.message}</div>
              {w.attending !== null && w.attending !== undefined && (
                <span className={`wish-tag ${w.attending ? 'yes' : 'no'}`}>
                  {w.attending ? 'Attending' : 'Sending love from afar'}
                </span>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
