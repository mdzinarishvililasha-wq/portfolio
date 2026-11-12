import React from 'react';

/**
 * Reusable Timeline Item Component for Education section
 * @param {Object} props
 * @param {string} [props.dotClass] - Optional modifier class (e.g. "timeline-dot-primary")
 * @param {string} props.period - Time period and location
 * @param {string} props.badge - Category badge text
 * @param {string} props.title - Institution / course title
 * @param {string} props.description - Description of studies
 */
export default function TimelineItem({
  dotClass = '',
  period,
  badge,
  title,
  description
}) {
  return (
    <div className="timeline-item">
      <div className={`timeline-dot ${dotClass}`.trim()}></div>
      <div className="timeline-card">
        <div className="timeline-header">
          <span className="timeline-period">{period}</span>
          {badge && <span className="chip chip-neutral label-caps">{badge}</span>}
        </div>
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-desc">{description}</p>
      </div>
    </div>
  );
}

