import React from 'react';
import SectionHeader from './common/SectionHeader';
import TimelineItem from './common/TimelineItem';
import { EDUCATION_ITEMS } from '../data/portfolioData';

/**
 * Education Section Component
 */
export default function Education() {
  return (
    <section className="site-section" id="education">
      {/* Section Header */}
      <SectionHeader
        label="04 / აკადემიური გზა"
        title="განათლება &amp; კურსები"
        description="ცოდნის დაგროვება ფორმალურ და არაფორმალურ სასწავლო გარემოში."
      />

      {/* Timeline items using reusable TimelineItem */}
      <div className="timeline">
        {EDUCATION_ITEMS.map((item) => (
          <TimelineItem
            key={item.id}
            dotClass={item.dotClass}
            period={item.period}
            badge={item.badge}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

