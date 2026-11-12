import React from 'react';

/**
 * Reusable Section Header Component
 * @param {Object} props
 * @param {string} props.label - Numbered or category badge (e.g., "01 / გაცნობა")
 * @param {string} props.title - Section title (e.g., "ჩემ შესახებ")
 * @param {string} props.description - Section lead description
 * @param {string} [props.className] - Optional extra class
 */
export default function SectionHeader({ label, title, description, className = '' }) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {label && <span className="section-label">{label}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}

