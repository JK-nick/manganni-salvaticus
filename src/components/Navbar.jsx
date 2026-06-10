/*
 * Persistent top navbar — transparent black glass (spec).
 * Links jump to story chapters within the single-page experience.
 * "Login" anchors the future /admin auth route (Phase 5 + Supabase).
 */
export default function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar-logo" href="#home">
        Manganni <span>Salvaticus</span>
      </a>

      <nav aria-label="Primary">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#team">Meet The Team</a></li>
          <li><a href="#veterans">Veterans Programs</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>

      <a className="navbar-login" href="#login">Login</a>
    </header>
  )
}
