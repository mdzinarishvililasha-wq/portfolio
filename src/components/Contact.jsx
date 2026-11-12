import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

/**
 * Contact Section Component with Copy-to-Clipboard functionality
 */
export default function Contact() {
  const [copyState, setCopyState] = useState('idle'); // 'idle' | 'copied' | 'error'

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTACT_INFO.email);
      } else {
        // Fallback for older browsers / non-HTTPS
        const tempInput = document.createElement('textarea');
        tempInput.value = CONTACT_INFO.email;
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      setCopyState('copied');
      setTimeout(() => {
        setCopyState('idle');
      }, 2200);
    } catch {
      setCopyState('error');
      setTimeout(() => {
        setCopyState('idle');
      }, 2000);
    }
  };

  const getCopyIcon = () => {
    if (copyState === 'copied') return 'check';
    if (copyState === 'error') return 'error';
    return 'content_copy';
  };

  const getCopyLabel = () => {
    if (copyState === 'copied') return 'დაკოპირდა!';
    if (copyState === 'error') return 'შეცდომა';
    return 'კოპირება';
  };

  return (
    <section className="site-section" id="contact" style={{ borderBottom: 'none' }}>
      <div className="contact-wrapper">
        <div className="contact-grid">
          {/* Contact info and location */}
          <div className="contact-info">
            <span className="section-label">06 / კომუნიკაცია</span>
            <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
              დამიკავშირდით
            </h2>
            <p className="section-desc" style={{ maxWidth: '100%' }}>
              ყოველთვის ღია ვარ ახალი სასწავლო შესაძლებლობების, მენტორობისა და საინტერესო ტექნოლოგიური იდეებისთვის. მოხარული ვიქნები მოვისმინო თქვენი რჩევები და გამოხმაურება.
            </p>
            <div className="contact-location">
              <span className="material-symbols-outlined">location_on</span>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>

          {/* Email card & actions */}
          <div className="contact-box">
            <div>
              <p className="contact-box-label">პირდაპირი ელ-ფოსტა</p>
              <p className="contact-email-text" id="email-text">
                {CONTACT_INFO.email}
              </p>
            </div>

            <div className="contact-buttons-row">
              <a className="btn btn-primary" href={`mailto:${CONTACT_INFO.email}`}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  mail
                </span>
                <span>მომწერეთ ელ-ფოსტაზე</span>
              </a>
              <button
                className="btn btn-secondary"
                id="copy-email-btn"
                type="button"
                aria-label="ელ-ფოსტის კოპირება"
                onClick={handleCopyEmail}
                style={
                  copyState === 'copied'
                    ? { backgroundColor: 'var(--color-surface-container-high)' }
                    : undefined
                }
              >
                <span
                  className="material-symbols-outlined"
                  id="copy-icon"
                  style={{ fontSize: '16px' }}
                >
                  {getCopyIcon()}
                </span>
                <span id="copy-label">{getCopyLabel()}</span>
              </button>
            </div>

            <div className="contact-social-row">
              <span className="contact-social-item">
                <span className="material-symbols-outlined">terminal</span>
                Git &amp; GitHub
              </span>
              <span className="contact-social-item">
                <span className="material-symbols-outlined">work</span>
                LinkedIn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

