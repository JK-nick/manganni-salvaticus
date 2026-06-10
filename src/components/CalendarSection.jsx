import eventsData from '../data/events.json'

/*
 * Interactive Event Calendar — the centerpiece (spec, Section 2).
 * Phase 1: static glassmorphism card with a real month grid rendered
 * from events.json. The JSON is shaped like the Supabase rows that
 * will replace it in Phase 5, when hover-expand, green glow, and
 * slide-out event details are added. Components won't change —
 * only the data source will.
 */

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function buildMonthGrid(year, month, events) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const eventDays = new Set(
    events
      .filter((e) => {
        const d = new Date(e.date + 'T00:00:00')
        return d.getFullYear() === year && d.getMonth() === month
      })
      .map((e) => new Date(e.date + 'T00:00:00').getDate()),
  )

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push({ key: `empty-${i}`, empty: true })
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({ key: `day-${day}`, day, hasEvent: eventDays.has(day) })
  }
  return cells
}

function formatEventDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}`
}

export default function CalendarSection() {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const { events } = eventsData

  const cells = buildMonthGrid(year, month, events)
  const upcoming = [...events].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <section className="section" id="events">
      <div className="section-inner">
        <p className="eyebrow">The Journey Ahead</p>
        <h2 className="section-title">Upcoming Events</h2>

        <div className="calendar-card">
          <div className="calendar-header">
            <span className="calendar-month">
              {MONTHS[month]} {year}
            </span>
          </div>

          <div className="calendar-grid" role="grid" aria-label={`${MONTHS[month]} ${year}`}>
            {WEEKDAYS.map((d) => (
              <div key={d} className="calendar-weekday">{d}</div>
            ))}
            {cells.map((cell) =>
              cell.empty ? (
                <div key={cell.key} className="calendar-day empty" />
              ) : (
                <div
                  key={cell.key}
                  className={`calendar-day${cell.hasEvent ? ' has-event' : ''}`}
                >
                  {cell.day}
                  {cell.hasEvent && <span className="event-dot" />}
                </div>
              ),
            )}
          </div>

          <div className="calendar-events">
            {upcoming.map((event) => (
              <div key={event.id} className="event-row">
                <span className="event-date">{formatEventDate(event.date)}</span>
                <span className="event-name">{event.title}</span>
                <span className="event-tag">{event.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
