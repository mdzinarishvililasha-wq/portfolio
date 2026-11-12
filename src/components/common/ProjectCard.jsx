import React from 'react';

/**
 * Reusable Project Card Component
 * @param {Object} props
 * @param {string} props.badge - Category or course label
 * @param {string} props.year - Project year or timespan
 * @param {string} props.imageUrl - Image URL
 * @param {string} props.imageAlt - Alt text for image
 * @param {string} props.caption - Caption below image
 * @param {string} props.categoryIcon - Icon name
 * @param {string} props.categoryName - Category subtitle
 * @param {string} props.title - Project title
 * @param {string} props.narrative - Main project narrative
 * @param {Array<{title: string, description: string}>} props.highlights - List of technical points
 * @param {string[]} props.tags - Technology tags
 * @param {string} props.linkHref - Action link href
 * @param {string} props.linkText - Action link text
 */
export default function ProjectCard({
  badge,
  year,
  imageUrl,
  imageAlt,
  caption,
  categoryIcon,
  categoryName,
  title,
  narrative,
  highlights = [],
  tags = [],
  linkHref = '#contact',
  linkText = 'დეტალების განხილვა'
}) {
  return (
    <article className="project-card">
      <div className="project-grid">
        {/* Left column: Media */}
        <div className="project-media-col">
          <div className="project-media-top">
            <span className="chip chip-neutral label-caps" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              <span className="badge-dot" style={{ backgroundColor: 'var(--color-secondary)' }}></span>
              {badge}
            </span>
            <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
              {year}
            </span>
          </div>

          <div className="project-image-wrapper">
            <img 
              src={imageUrl} 
              alt={imageAlt} 
              className="project-img" 
              loading="lazy" 
            />
          </div>

          {caption && <p className="project-caption">{caption}</p>}
        </div>

        {/* Right column: Content & details */}
        <div className="project-content-col">
          <div>
            <div className="project-category">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {categoryIcon}
              </span>
              <span>{categoryName}</span>
            </div>

            <h3 className="project-title">{title}</h3>

            <p className="project-narrative">{narrative}</p>

            {/* Technical Highlights */}
            <div className="project-highlights">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-item">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>
                    <strong>{item.title}:</strong> {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags and Action */}
          <div className="project-footer">
            <div className="chips-row">
              {tags.map((tag, idx) => (
                <span key={idx} className="chip">{tag}</span>
              ))}
            </div>
            <div>
              <a className="project-link-action" href={linkHref}>
                <span>{linkText}</span>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

