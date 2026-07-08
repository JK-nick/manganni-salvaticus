/*
 * Sponsor conveyor rail — left & right persistent vertical columns.
 *
 * Phase 3 behavior:
 *  - Infinite, seamless loop. Cards are duplicated (2x) and the track is
 *    translated by rAF; once it has moved exactly one full "set" of cards,
 *    the offset wraps via modulo — so the loop point is invisible.
 *  - The "seamless" distance is MEASURED from the real rendered DOM
 *    (trackRef.scrollHeight / 2), not assumed from card heights in CSS.
 *    This is the fix for the empty-space-gap bug from earlier CSS-keyframe
 *    attempts: those assumed a fixed height that drifted from the real
 *    rendered layout at different viewport sizes.
 *  - Left rail drifts up, right rail drifts down (opposite directions).
 *  - Cards are rotated in 3D to "face" the center of the page, like Ferris
 *    wheel gondolas hung facing the middle of the ride.
 *  - Hover pauses the rail (pausedRef, no re-renders).
 *  - Direct DOM mutation via ref in the rAF loop — zero React state in the
 *    scroll/animation hot path.
 *  - Mobile (<=1024px): the rail becomes a fixed horizontal bottom ticker.
 *    The loop switches axis (translateX + scrollWidth) automatically.
 */
import { useEffect, useRef } from 'react'
import { sponsors } from '../data/sponsors.js'

const SPEED_PX_PER_SEC = 28 // tuned for a slow, ambient drift

export default function SponsorRail({ side }) {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const halfSizeRef = useRef(0)
  const pausedRef = useRef(false)
  const isMobileRef = useRef(false)
  const lastTsRef = useRef(null)
  const rafIdRef = useRef(null)

  const direction = side === 'left' ? -1 : 1

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      isMobileRef.current = window.matchMedia('(max-width: 1024px)').matches
      halfSizeRef.current = isMobileRef.current
        ? track.scrollWidth / 2
        : track.scrollHeight / 2
    }

    measure()

    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    const tick = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = (ts - lastTsRef.current) / 1000
      lastTsRef.current = ts

      const half = halfSizeRef.current
      if (half > 0 && !pausedRef.current) {
        offsetRef.current += SPEED_PX_PER_SEC * dt * direction
        offsetRef.current = ((offsetRef.current % half) + half) % half

        const value = -offsetRef.current
        track.style.transform = isMobileRef.current
          ? `translate3d(${value}px, 0, 0)`
          : `translate3d(0, ${value}px, 0)`
      }

      rafIdRef.current = requestAnimationFrame(tick)
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (!prefersReducedMotion) {
      rafIdRef.current = requestAnimationFrame(tick)
    }

    return () => {
      window.removeEventListener('resize', onResize)
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePause = () => {
    pausedRef.current = true
  }
  const handleResume = () => {
    pausedRef.current = false
  }

  const doubled = [...sponsors, ...sponsors]

  return (
    <aside
      className={`sponsor-rail ${side}`}
      aria-label={`Sponsors (${side})`}
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <span className="sponsor-rail-label">Sponsors</span>
      <div className="sponsor-rail-viewport">
        <div className="sponsor-track" ref={trackRef}>
          {doubled.map((sponsor, i) => (
            <div
              className="sponsor-card"
              key={`${sponsor.id}-${i}`}
              aria-hidden={i >= sponsors.length ? 'true' : undefined}
            >
              <img
                className="sponsor-card-logo"
                src={`${import.meta.env.BASE_URL}sponsors/${sponsor.file}`}
                alt={sponsor.name}
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}