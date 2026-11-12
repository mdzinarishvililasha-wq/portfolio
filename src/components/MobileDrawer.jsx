import React, { useEffect } from 'react';
import { NAV_LINKS } from '../data/portfolioData';

/**
 * Mobile Navigation Drawer & Backdrop Overlay Component
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the drawer is visible
 * @param {Function} props.onClose - Callback to close drawer
 * @param {string} props.activeSection - Currently active section ID
 */
export default function MobileDrawer({ isOpen, onClose, activeSection = 'hero' }) {
  // Prevent background scrolling when drawer is open and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`mobile-overlay ${isOpen ? 'is-open' : ''}`.trim()}
        id="mobile-menu-backdrop"
        onClick={onClose}
      />

      {/* Slide-out Drawer */}
      <aside
        className={`mobile-drawer ${isOpen ? 'is-open' : ''}`.trim()}
        id="mobile-menu-drawer"
        aria-label="მობილური მენიუ"
      >
        <div>
          {/* Drawer Header */}
          <div className="drawer-header">
            <div>
              <h2 className="drawer-title">ლაშა მძინარიშვილი</h2>
              <p className="drawer-subtitle">მოსწავლე &amp; დამწყები დეველოპერი</p>
            </div>
            <button
              className="drawer-close-btn"
              id="mobile-menu-close-btn"
              aria-label="მენიუს დახურვა"
              onClick={onClose}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                close
              </span>
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="drawer-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                className={`drawer-link mobile-nav-link ${activeSection === link.id ? 'active' : ''}`.trim()}
                href={`#${link.id}`}
                onClick={onClose}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <a
            className="btn btn-primary btn-block mobile-nav-link"
            href="#contact"
            onClick={onClose}
          >
            <span>დამიკავშირდით</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              arrow_forward
            </span>
          </a>
          <div className="drawer-badges">
            <span>სკოლა „ერუდიტი“</span>
            <span>კომაროვი STEM</span>
          </div>
        </div>
      </aside>
    </>
  );
}

