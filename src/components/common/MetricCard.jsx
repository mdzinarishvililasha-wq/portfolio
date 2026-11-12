import React from 'react';

/**
 * Reusable Metric Card Component
 * @param {Object} props
 * @param {string} props.icon - Material icon name
 * @param {string} props.label - Metric category/label
 * @param {string} props.value - Metric value/organization
 */
export default function MetricCard({ icon, label, value }) {
  return (
    <div className="metric-card">
      <span className="material-symbols-outlined metric-icon">{icon}</span>
      <div>
        <p className="metric-label">{label}</p>
        <p className="metric-value">{value}</p>
      </div>
    </div>
  );
}

