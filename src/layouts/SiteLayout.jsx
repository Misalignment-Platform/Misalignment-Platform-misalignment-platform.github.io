import React, { useEffect, useRef, useState } from 'react';

const links = [['/', 'Platform'], ['/explorer', 'Business Explorer'], ['/engines', 'Concepts'], ['/demo', 'Interactive demo'], ['/developers', 'Samples'], ['/academy', 'Notes'], ['/doctrine', 'Doctrine']];

export function SiteLayout({ children, route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => setMenuOpen(false), [route]);
  return <div className="site-shell">
    <header className="nav" onKeyDown={event => { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } }}>
      <a className="brand" href="#/"><img className="brand-mark" src="./brand-mark.svg" alt="Misalignment Platform"/><span>Misalignment<span className="brand-muted">.Platform</span></span></a>
      <button ref={menuButton} type="button" className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? '✕' : '☰'}</button>
      <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Main">{links.map(([href, label]) => <a key={href} className={route === href ? 'active' : ''} aria-current={route === href ? 'page' : undefined} href={'#' + href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="button button-small" href="#/early-access">Project status <span>↗</span></a>
    </header>
    <aside className="notice" role="note">
      This website's demos and data are local samples, not a connected platform service. The separate Platform repository contains historical implementations and current prototypes with varying evidence; none of that alone establishes production readiness.
    </aside>
    <main>{children}</main>
    <footer className="footer">
      <div>
        <div className="brand"><img className="brand-mark" src="./brand-mark.svg" alt="Misalignment Platform"/><span>Misalignment<span className="brand-muted">.Platform</span></span></div>
        <p>Exploring evidence for AI decisions that deserve scrutiny.</p>
      </div>
      <div className="footer-links"><a href="#/about">About</a><a href="#/partners">Research directions</a><a href="#/early-access">Project status</a></div>
      <small>© 2026 Misalignment Platform. Prototype scores are illustrative and are not compliance or safety assessments.</small>
    </footer>
  </div>;
}
