import { useRef, Children } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { backOut } from 'motion'

// Scroll distance (in vh) dedicated to each chapter's crossfade.
// Bigger = slower, more gradual. Tune this first if pacing feels off.
const VH_PER_CHAPTER = 120

function Chapter({ index, total, scrollYProgress, children }) {
  const segStart = index / total
  const segEnd = (index + 1) / total
  const p = useTransform(scrollYProgress, [segStart, segEnd], [0, 1])

  const isFirst = index === 0
  const isLast = index === total - 1
  const points = isFirst ? [0, 0.7, 1] : isLast ? [0, 0.3, 1] : [0, 0.3, 0.7, 1]

  const opacity = useTransform(
    p, points,
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0]
  )
  const scale = useTransform(
    p, points,
    isFirst ? [1, 1, 1.15] : isLast ? [0.5, 1, 1] : [0.5, 1, 1, 1.15],
    { ease: backOut }
  )
  const blurAmount = useTransform(
    p, points,
    isFirst ? [0, 0, 3] : isLast ? [3, 0, 0] : [3, 0, 0, 3]
  )
  const filter = useTransform(blurAmount, (b) => `blur(${b}px)`)

  // Pendulum-style swing — opposite rotation on entrance vs exit
  const rotate = useTransform(
    p, points,
    isFirst ? [0, 0, 2] : isLast ? [-2, 0, 0] : [-2, 0, 0, 2],
    { ease: backOut }
  )

  // Horizontal sway paired with the rotation
  const x = useTransform(
    p, points,
    isFirst ? [0, 0, 16] : isLast ? [-16, 0, 0] : [-16, 0, 0, 16],
    { ease: backOut }
  )

  return (
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity,
          scale,
          rotate,
          x,
          filter,
          transformOrigin: '50% 50%',
          willChange: 'opacity, transform, filter',
        }}
      >
        {children}
      </motion.div>
  )
}

/**
 * Pins one full viewport for the entire chapter sequence. All
 * chapters are stacked in the exact same spot; scroll progress
 * decides which one is dominant. This is what lets the outgoing
 * chapter dissolve while the incoming one grows from center,
 * both visible together — a true crossfade, not a handoff.
 */
export default function ChapterSequence({ children }) {
  const containerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const chapters = Children.toArray(children)
  const total = chapters.length

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  if (prefersReducedMotion) {
    // No pin, no crossfade — chapters just stack normally
    return <div>{chapters}</div>
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', height: `${total * VH_PER_CHAPTER}vh` }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
        {chapters.map((child, i) => (
          <Chapter key={i} index={i} total={total} scrollYProgress={scrollYProgress}>
            {child}
          </Chapter>
        ))}
      </div>
    </div>
  )
}