import React from 'react';
import SectionHeader from './common/SectionHeader';
import GoalCard from './common/GoalCard';
import { GOALS_ITEMS } from '../data/portfolioData';

/**
 * Goals & Future Vision Section Component
 */
export default function Goals() {
  return (
    <section className="site-section" id="goals">
      {/* Section Header */}
      <SectionHeader
        label="05 / სამომავლო ხედვა"
        title="მიზნები და გეგმები"
        description="კონკრეტული ეტაპები, რომლებზეც უახლოეს პერიოდში ვამახვილებ ყურადღებას."
      />

      {/* Goals Grid using reusable GoalCard components */}
      <div className="goals-grid">
        {GOALS_ITEMS.map((goal) => (
          <GoalCard
            key={goal.id}
            icon={goal.icon}
            title={goal.title}
            description={goal.description}
          />
        ))}
      </div>
    </section>
  );
}

