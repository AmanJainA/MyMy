import { useEffect, useRef, useState } from 'react';
import { weddingData } from '../data/weddingData.js';
import './ScratchCardHeart.css';

export default function ScratchCardHeart() {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const paintFoil = () => {
      const { width: w, height: h } = canvas;
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#c9a227');
      grad.addColorStop(0.5, '#e8cf86');
      grad.addColorStop(1, '#c9a227');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 8 + 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#7a2f26';
      ctx.font = '600 14px Poppins, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SCRATCH THE HEART', w / 2, h / 2 - 4);
      ctx.font = 'italic 12px Georgia, serif';
      ctx.fillText('to reveal our date', w / 2, h / 2 + 14);
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      paintFoil();
    };
    resize();
    window.addEventListener('resize', resize);

    const getPos = (evt) => {
      const rect = canvas.getBoundingClientRect();
      const t = evt.touches ? evt.touches[0] : evt;
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    };

    const scratch = (evt) => {
      const { x, y } = getPos(evt);
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    };

    const computePct = () => {
      const { width: w, height: h } = canvas;
      if (!w || !h) return;
      const data = ctx.getImageData(0, 0, w, h).data;
      let cleared = 0;
      let total = 0;
      const step = 32;
      for (let i = 3; i < data.length; i += step) {
        total++;
        if (data[i] < 40) cleared++;
      }
      const p = Math.round((cleared / total) * 100);
      setPct((prev) => (p > prev ? p : prev));
    };

    const start = (e) => {
      drawing.current = true;
      scratch(e);
    };
    const move = (e) => {
      if (!drawing.current) return;
      e.preventDefault();
      scratch(e);
      computePct();
    };
    const end = () => {
      drawing.current = false;
      computePct();
    };

    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);
    canvas.addEventListener('touchstart', start, { passive: true });
    canvas.addEventListener('touchmove', move, { passive: false });
    canvas.addEventListener('touchend', end);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', start);
      canvas.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', end);
      canvas.removeEventListener('touchstart', start);
      canvas.removeEventListener('touchmove', move);
      canvas.removeEventListener('touchend', end);
    };
  }, []);

  return (
    <section className="section scratch-section reveal">
      <span className="kicker">A Little Secret</span>
      <h2 className="heading">Save the Date</h2>
      <div className="divider" />
      <p className="sub">Scratch the golden heart to find out when we say "I do".</p>

      <div className="heart-outer">
        <div className="heart-reveal">
          <div className="rk">✦ Save the Date ✦</div>
          <div className="rd">{weddingData.weddingDateShort}</div>
          <div style={{ fontSize: '0.8rem' }}>{weddingData.city}</div>
        </div>
        <canvas ref={canvasRef} className="heart-canvas" />
      </div>

      <div className="scratch-progress-wrap">
        <div className="scratch-progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <div className="scratch-caption">
        {pct < 90 ? 'Scratch with your finger or mouse ✦' : 'Yay! Mark your calendars 💛'}
      </div>
    </section>
  );
}
