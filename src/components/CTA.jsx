/*
 * Final CTA — "Join The Journey" with Volunteer / Donate (spec, Section 6).
 * Slow-motion jungle footage backs this section once Phase 2's
 * video layer is live.
 */
export default function CTA() {
  return (
    <section className="section cta" id="join">
      <div className="section-inner">
        <h2 className="section-title">Join The Journey</h2>
        <div className="cta-buttons">
          <a className="btn btn-primary" href="#volunteer">Volunteer</a>
          <a className="btn btn-secondary" href="#donate">Donate</a>
        </div>
      </div>
    </section>
  )
}
