import React from 'react';

/**
 * Reusable Skill Card Component
 * @param {Object} props
 * @param {string} props.icon - Material icon name
 * @param {string} props.statusBadge - Status text (e.g. "შესწავლაშია")
 * @param {string} props.title - Skill category title
 * @param {string} props.description - Skill summary
 * @param {string[]} props.tags - List of technologies/topics
 * @param {string} props.progressLabel - Progress label (e.g. "პროგრესი")
 * @param {string} props.progressValue - Progress status (e.g. "საბაზისო & პრაქტიკა")
 */
export default function SkillCard({
  icon,
  statusBadge,
  title,
  description,
  tags = [],
  progressLabel,
  progressValue
}) {
  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <div className="skill-meta-bar">
          <span className="material-symbols-outlined">{icon}</span>
          {statusBadge && <span className="chip chip-neutral label-caps">{statusBadge}</span>}
        </div>
        <h3 className="skill-title">{title}</h3>
        <p className="skill-desc">{description}</p>
        <div className="skill-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="chip">{tag}</span>
          ))}
        </div>
      </div>
      <div className="skill-card-footer">
        <span>{progressLabel}</span>
        <span className="skill-progress-tag">{progressValue}</span>
      </div>
    </div>
  );
}

