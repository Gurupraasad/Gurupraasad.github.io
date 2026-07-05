import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/cases', label: 'Work' },
  { to: '/demos', label: 'Demos' },
  { to: '/about', label: 'About' },
  { to: '/thinking', label: 'Thinking' },
  { to: '/writing', label: 'Writing' },
]

export function RootLayout() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <NavLink to="/" className="brand-mark" aria-label="Home">
          Guru Praasad
        </NavLink>
        <nav>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="nav-cta">Get in touch</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>
          Case studies describe real product work at Wolters Kluwer with sanitized details.
          No proprietary data, customer names, or internal systems are disclosed.
        </p>
      </footer>
    </div>
  )
}