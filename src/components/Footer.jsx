import React from 'react';
import { NAV_LINKS } from '../data/portfolioData';

/**
 * Site Footer Component
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-copyright">
          <p>© 2025 ლაშა მძინარიშვილი. შექმნილია ენთუზიაზმითა და აკადემიური სიზუსტით.</p>
          <p className="footer-sub">სკოლა „ერუდიტი“ • კომაროვი STEM • Tbilisi, Georgia</p>
        </div>

        <nav className="footer-nav" aria-label="ფუტერის ბმულები">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.id}
              className={`footer-link ${idx === 0 ? 'footer-link-primary' : ''}`.trim()}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

