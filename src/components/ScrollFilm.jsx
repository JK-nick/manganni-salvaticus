import { useEffect, useRef } from 'react';

/**
 * ScrollFilm
 * A fixed black veil that sits between the video and all page content.
 * Opacity is 0 at the top of the page (pure video) and rises to MAX_OPACITY
 * as the user scrolls down, making text sections readable without ever
 * hiding the video entirely.
 *
 * Tuning:
 *   MAX_OPACITY   – how dark the film gets at full scroll (0–1). 0.82 is a
 *                   good starting point: readable but the video still breathes.
 *   SCROLL_RANGE  – how many pixels of scroll to reach MAX_OPACITY.
 *                   300px feels natural; lower = faster fade, higher = slower.
 *
 * Performance:
 *   Uses a ref + direct DOM mutation inside requestAnimationFrame.
 *   Zero React state updates in the scroll hot path.
 */

const MAX_OPACITY = 0.82;
const SCROLL_RANGE = 300; // px

export default function ScrollFilm() {
  const filmRef = useRef(null);

  useEffect(() => {
    const film = filmRef.current;
    if (!film) return;

    // Reduced-motion: skip the animation, go straight to full opacity so
    // content is always readable (video effectively becomes a static poster).
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      film.style.opacity = MAX_OPACITY;
      return;
    }

    let rafId;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / SCROLL_RANGE, 1);
        film.style.opacity = progress * MAX_OPACITY;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={filmRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        background: '#000',
        opacity: 0,
        pointerEvents: 'none', // clicks pass through to content below
      }}
    />
  );
}
