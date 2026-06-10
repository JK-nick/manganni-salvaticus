import Navbar from './components/Navbar.jsx'
import SponsorRail from './components/SponsorRail.jsx'
import Hero from './components/Hero.jsx'
import CalendarSection from './components/CalendarSection.jsx'
import Categories from './components/Categories.jsx'
import Mission from './components/Mission.jsx'
import Impact from './components/Impact.jsx'
import CTA from './components/CTA.jsx'

/*
 * INDEX (from spec):
 *   Navbar → Hero → Calendar → Categories → Mission → Impact → CTA
 *
 * Persistent layers:
 *   - .video-layer  : fixed background. Placeholder now; the <video>
 *                     element drops in here in Phase 2.
 *   - Navbar        : transparent black glass, fixed top.
 *   - SponsorRail x2: fixed left/right. Static in Phase 1;
 *                     infinite conveyor motion arrives in Phase 3.
 *
 * Each section is a full-height "story chapter" so Phase 4's
 * Motion.dev dissolve/scale transitions can wrap them one-to-one.
 */
export default function App() {
  return (
    <>
      <div className="video-layer" aria-hidden="true">
        <div className="video-placeholder" />
        <div className="video-vignette" />
      </div>

      <Navbar />
      <SponsorRail side="left" />
      <SponsorRail side="right" />

      <main className="site">
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
