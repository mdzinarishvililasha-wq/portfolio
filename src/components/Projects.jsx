import React from 'react';
import SectionHeader from './common/SectionHeader';
import ProjectCard from './common/ProjectCard';
import { FEATURED_PROJECT } from '../data/portfolioData';

/**
 * Projects Section Component
 */
export default function Projects() {
  return (
    <section className="site-section" id="projects">
      {/* Section Header */}
      <SectionHeader
        label="03 / პრაქტიკული ნამუშევარი"
        title="გამორჩეული პროექტი"
        description="ტექნიკის, ელექტრონიკისა და პროგრამული უზრუნველყოფის რეალური სინთეზი."
      />

      {/* Featured Project Card using reusable ProjectCard with props */}
      <ProjectCard {...FEATURED_PROJECT} />

      {/* Upcoming Projects Banner */}
      <div className="upcoming-banner">
        <div className="upcoming-left">
          <span className="material-symbols-outlined">pending_actions</span>
          <div>
            <h4 className="upcoming-title">მომდევნო პროექტები მზადების პროცესშია</h4>
            <p className="upcoming-desc">
              მუშაობა მიმდინარეობს ვებ-აპლიკაციებსა და სენსორულ მოდულებზე, რომლებიც მალე აიტვირთება GitHub-ზე.
            </p>
          </div>
        </div>
        <span className="chip chip-neutral label-caps" style={{ alignSelf: 'flex-start' }}>
          ვებ &amp; API
        </span>
      </div>
    </section>
  );
}

