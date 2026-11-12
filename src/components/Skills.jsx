import React from 'react';
import SectionHeader from './common/SectionHeader';
import SkillCard from './common/SkillCard';
import { SKILL_CARDS } from '../data/portfolioData';

/**
 * Skills & Technologies Section Component
 */
export default function Skills() {
  return (
    <section className="site-section" id="skills">
      {/* Section Header */}
      <SectionHeader
        label="02 / ცოდნა და ინსტრუმენტები"
        title="უნარები &amp; ტექნოლოგიები"
        description="რეალისტური და გულწრფელი მიმოხილვა. ესენია ტექნოლოგიები, რომელთა საბაზისო პრინციპებს ვფლობ და აქტიურად ვხვეწ ყოველდღიურად."
      />

      {/* Skills Grid using reusable SkillCard components */}
      <div className="skills-grid">
        {SKILL_CARDS.map((card) => (
          <SkillCard
            key={card.id}
            icon={card.icon}
            statusBadge={card.statusBadge}
            title={card.title}
            description={card.description}
            tags={card.tags}
            progressLabel={card.progressLabel}
            progressValue={card.progressValue}
          />
        ))}
      </div>
    </section>
  );
}

