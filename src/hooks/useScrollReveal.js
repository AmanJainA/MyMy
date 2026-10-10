import { useEffect } from 'react';

// Observes every .reveal / .tl-item element in the document and adds
// .in-view once it scrolls into the viewport, powering the CSS
// scroll-triggered fade/slide animations used across the page.
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .tl-item');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
