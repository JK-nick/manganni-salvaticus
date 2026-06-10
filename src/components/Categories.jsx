/*
 * Categories — four large circular cards (from the sketch).
 * Phase 1: static circles with hover border glow.
 * Later phases add: card growth, intensified glow, background
 * video shift, and text slide on hover.
 */
const CATEGORIES = [
  {
    id: 'team',
    name: 'Meet The Team',
    desc: 'The people behind the mission.',
  },
  {
    id: 'veterans',
    name: 'Veterans Programs',
    desc: 'Service, strength, second chapters.',
  },
  {
    id: 'about',
    name: 'About Us',
    desc: 'Our story and our mission.',
  },
  {
    id: 'vision',
    name: 'Vision & Future',
    desc: 'Where we are headed next.',
  },
]

export default function Categories() {
  return (
    <section className="section" id="team">
      <div className="section-inner">
        <p className="eyebrow">Explore</p>
        <h2 className="section-title">Choose Your Path</h2>

        <div className="categories-grid">
          {CATEGORIES.map((cat, i) => (
            <a key={cat.id} className="category-card" href={`#${cat.id}`}>
              <span className="category-num">0{i + 1}</span>
              <span className="category-name">{cat.name}</span>
              <span className="category-desc">{cat.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
