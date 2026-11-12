import React from 'react';

/**
 * Reusable Bento Card Component for About section
 * @param {Object} props
 * @param {string} props.icon - Material icon name
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 */
export default function BentoCard({ icon, title, description }) {
  return (
    <div className="bento-card">
      <div className="bento-card-title">
        <span className="material-symbols-outlined">{icon}</span>
        <h4>{title}</h4>
      </div>
      <p className="bento-card-desc">{description}</p>
    </div>
  );
}

