import React from 'react';
import SectionHeader from './common/SectionHeader';
import BentoCard from './common/BentoCard';
import { BENTO_CARDS } from '../data/portfolioData';

/**
 * About Section Component
 */
export default function About() {
  return (
    <section className="site-section" id="about">
      {/* Section Header using reusable SectionHeader */}
      <SectionHeader
        label="01 / გაცნობა"
        title="ჩემ შესახებ"
        description="აკადემიური დისციპლინა, ინტერესი ტექნოლოგიებისადმი და პრაქტიკული ექსპერიმენტები."
      />

      <div className="about-grid">
        {/* Main narrative card */}
        <article className="card">
          <div className="card-header-icon">
            <span className="material-symbols-outlined">psychology</span>
            <h3 className="card-title">როგორ დაიწყო ჩემი გზა</h3>
          </div>
          <p className="narrative-text">
            ჩემი ინტერესი კომპიუტერული მეცნიერებების მიმართ დაიწყო იმ მარტივი კითხვით, თუ როგორ მუშაობს ციფრული სამყარო ეკრანის მიღმა. სკოლა „ერუდიტში“ სწავლის პარალელურად გადავწყვიტე, რომ თეორიული ცოდნა პრაქტიკაში გამომეცადა.
          </p>
          <p className="narrative-text">
            საქართველოს ბანკისა და კომაროვის სკოლის ერთობლივმა STEM კურსებმა გამიღო კარი მიკროკონტროლერებისა და რობოტოტექნიკის სამყაროში. იქ ვისწავლე, თუ როგორ შეიძლება რამდენიმე ხაზი C++ კოდით და მიკროსქემებით შექმნა მოწყობილობა, რომელიც გარემოს აღიქვამს და ბრძანებებს ემორჩილება.
          </p>
          <p className="narrative-text">
            ამ ეტაპზე ჩემი ძირითადი ფოკუსი მიმართულია Full-Stack ვებ-ტექნოლოგიების სიღრმისეულ შესწავლაზე. არ მეშინია შეცდომების — ყოველი ბაგი და არასწორად დაკავშირებული წრედი ჩემთვის ახალი გაკვეთილია.
          </p>
          <div className="chips-row">
            <span className="chip chip-neutral">თბილისი, საქართველო</span>
            <span className="chip chip-neutral">სკოლა „ერუდიტი“</span>
            <span className="chip chip-neutral">STEM ენთუზიასტი</span>
          </div>
        </article>

        {/* Bento Column with reusable BentoCard components */}
        <div className="bento-col">
          {BENTO_CARDS.map((item) => (
            <BentoCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

