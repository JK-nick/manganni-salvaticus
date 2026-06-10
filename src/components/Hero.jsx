/*
 * Hero — first thing users see.
 * Background = full-screen jungle night video (Phase 2; the fixed
 * .video-layer behind this section is its placeholder).
 * Foreground = huge glowing red title + subtitle + scroll indicator.
 * The pulse animation on the arrow arrives with Motion.dev in Phase 4.
 */
export default function Hero() {
  return (
    <section className="section hero" id="home">
      <div className="section-inner">
        <h1 className="hero-title">
          Manganni<br />Salvaticus
        </h1>
        <p className="hero-subtitle">
          <em>Preserving Legacy.</em>
          <span>Building Opportunity.</span>
          <span>Creating Champions.</span>
        </p>
      </div>

      <a className="scroll-indicator" href="#events" aria-label="Scroll to upcoming events">
        <span>Begin</span>
        <svg width="22" height="30" viewBox="0 0 22 30" fill="none" aria-hidden="true">
          <path
            d="M11 2v22M3 17l8 8 8-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  )
}
