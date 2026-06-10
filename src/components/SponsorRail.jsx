/*
 * Sponsor conveyor rail — left & right persistent columns.
 * Phase 1: static placeholder slots.
 * Phase 3: becomes an infinite vertical loop (repeat: Infinity),
 *          left rail drifting up, right rail drifting down.
 */
const PLACEHOLDER_SLOTS = ['S1', 'S2', 'S3', 'S4', 'S5']

export default function SponsorRail({ side }) {
  return (
    <aside className={`sponsor-rail ${side}`} aria-label={`Sponsors (${side})`}>
      <span className="sponsor-rail-label">Sponsors</span>
      {PLACEHOLDER_SLOTS.map((slot) => (
        <div key={slot} className="sponsor-slot">{slot}</div>
      ))}
    </aside>
  )
}
