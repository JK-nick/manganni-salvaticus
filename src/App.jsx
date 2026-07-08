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
import ChapterSequence from './components/ChapterSequence.jsx'
import useLenis from './hooks/useLenis.js'

export default function App() {
  useLenis()

  return (
    <>
      <VideoLayer src={`${import.meta.env.BASE_URL}videos/background.mp4`} />
      <ScrollFilm />

      <Navbar />
      <SponsorRail side="left" />
      <SponsorRail side="right" />

      <main className="site" style={{ position: 'relative', zIndex: 2 }}>
        <ChapterSequence>
          <Hero />
          <CalendarSection />
          <Categories />
          <Mission />
          <Impact />
        </ChapterSequence>
        <CTA />
      </main>
    </>
  )
}