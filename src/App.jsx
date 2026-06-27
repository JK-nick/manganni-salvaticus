import Navbar from './components/Navbar.jsx'
import SponsorRail from './components/SponsorRail.jsx'
import Hero from './components/Hero.jsx'
import CalendarSection from './components/CalendarSection.jsx'
import Categories from './components/Categories.jsx'
import Mission from './components/Mission.jsx'
import Impact from './components/Impact.jsx'
import CTA from './components/CTA.jsx'
import VideoLayer from './components/VideoLayer.jsx'
import ScrollFilm from './components/ScrollFilm.jsx'

/*
 * INDEX (from spec):
 *   Navbar → Hero → Calendar → Categories → Mission → Impact → CTA
 *
 * Z-stack:
 *   z-0  VideoLayer  — fixed background video, always playing
 *   z-1  ScrollFilm  — black veil that darkens as the user scrolls
 *   z-2  Navbar      — fixed top, glass effect
 *   z-2  SponsorRail — fixed left/right (Phase 3: infinite conveyor)
 *   z-2  main        — all section content
 */
export default function App() {
  return (
    <>
      {/* z-0 — the world */}
      <VideoLayer src={`${import.meta.env.BASE_URL}videos/background.mp4`} />

      {/* z-1 — the film that rises on scroll */}
      <ScrollFilm />

      {/* z-2 — everything else */}
      <Navbar />
      <SponsorRail side="left" />
      <SponsorRail side="right" />

      <main className="site" style={{ position: 'relative', zIndex: 2 }}>
        <Hero />
        <CalendarSection />
        <Categories />
        <Mission />
        <Impact />
        <CTA />
      </main>
    </>
  )
}
