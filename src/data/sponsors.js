/*
 * Sponsor data — shape mirrors what SponsorRail expects.
 * `file` is the expected filename under public/sponsors/ (lowercase).
 * Until real logo art is dropped in, SponsorRail renders `name` as a
 * styled wordmark card instead — swapping in real files later requires
 * no code changes, just adding the file with this exact name.
 */
export const sponsors = [
  { id: 'gdc', name: 'GD&C', file: 'gdc.png' },
  { id: 'naples-nissan', name: 'Naples Nissan', file: 'naples-nissan.png' },
  { id: 'greener-grass-sod', name: 'Greener Grass SOD', file: 'greener-grass-sod.png' },
  { id: 'sacred-alkaline-water', name: 'Sacred Alkaline Water', file: 'sacred-alkaline-water.png' },
  { id: 'authentic-home-improvements', name: 'Authentic Home Improvements', file: 'authentic-home-improvements.png' },
]
