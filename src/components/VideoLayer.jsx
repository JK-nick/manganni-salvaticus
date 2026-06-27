import { useEffect, useRef } from 'react';

/**
 * VideoLayer
 * Fixed, full-viewport video that lives at the very bottom of the z-stack.
 * Nothing sits below this — it IS the background.
 *
 * Props:
 *   src    – path to the video file, e.g. "/videos/background.mp4"
 *   poster – optional static frame shown before video loads (recommended)
 */
export default function VideoLayer({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect prefers-reduced-motion: pause the video
    // (poster image will show instead — set one for best UX)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      video.pause();
    }

    // Also respond if the user toggles the setting while the page is open
    const handleChange = (e) => {
      if (e.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
