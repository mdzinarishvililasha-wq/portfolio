import React from 'react';
import { NAV_LINKS } from '../data/portfolioData';

/**
 * Top Navigation Bar Component
 * @param {Object} props
 * @param {string} props.activeSection - Currently active section ID for scroll spy
 * @param {Function} props.onOpenMobileMenu - Callback to open mobile drawer
 */
export default function Navbar({ activeSection = 'hero', onOpenMobileMenu }) {
  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Brand Logo & Name */}
        <a className="brand-logo" href="#hero">
          <span className="brand-name">ლაშა მძინარიშვილი</span>
          <span className="brand-badge">
            <span className="badge-dot"></span>
            სტუდენტი
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="ძირითადი ნავიგაცია">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`.trim()}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header Action */}
        <div className="header-actions">
          <a className="btn btn-primary" href="#contact">
            <span>კონტაქტი</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              mail
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-btn"
          id="mobile-menu-open-btn"
          aria-label="მენიუს გახსნა"
          onClick={onOpenMobileMenu}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}

