import React from 'react';

const links = [['/', 'Platform'], ['/engines', 'Concepts'], ['/demo', 'Interactive demo'], ['/developers', 'Samples'], ['/academy', 'Notes'], ['/doctrine', 'Doctrine']];

export function SiteLayout({ children, route }) {
  return <div className="site-shell">
    <header className="nav">
      <a className="brand" href="#/"><img className="brand-mark" src="./brand-mark.svg" alt="Misalignment Platform"/><span>Misalignment<span className="brand-muted">.Platform</span></span></a>
      <nav>{links.map(([href, label]) => <a key={href} className={route === href ? 'active' : ''} href={'#' + href}>{label}</a>)}</nav>
      <a className="button button-small" href="#/early-access">Project status <span>↗</span></a>
      <button className="menu-button" aria-label="Open navigation">☰</button>
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
