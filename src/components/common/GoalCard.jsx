import React from 'react';

/**
 * Reusable Goal Card Component
 * @param {Object} props
 * @param {string} props.icon - Material icon name
 * @param {string} props.title - Goal title
 * @param {string} props.description - Goal description
 */
export default function GoalCard({ icon, title, description }) {
  return (
    <div className="goal-card">
      <span className="material-symbols-outlined">{icon}</span>
      <h3 className="goal-title">{title}</h3>
      <p className="goal-desc">{description}</p>
    </div>
  );
}

