import React from 'react';
import MetricCard from './common/MetricCard';
import { HERO_METRICS, TERMINAL_PROFILE } from '../data/portfolioData';

/**
 * Hero Section Component
 */
export default function Hero() {
  return (
    <section className="site-section hero-section" id="hero">
      <div className="hero-grid">
        {/* Left column: Heading, intro, CTAs & metrics */}
        <div>
          {/* Status beacon pill */}
          <div className="hero-status-pill">
            <span className="status-beacon">
              <span className="beacon-pulse"></span>
              <span className="beacon-core"></span>
            </span>
            <span className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>
              მოსწავლე &amp; დამწყები დეველოპერი • თბილისი
            </span>
          </div>

          {/* Main title */}
          <h1 className="hero-title">
            ვქმნი მარტივ, საინტერესო ციფრულ და ტექნოლოგიურ გადაწყვეტებს.
          </h1>

          {/* Lead narrative */}
          <p className="hero-lead">
            მოგესალმებით! მე ვარ ლაშა, სკოლა „ერუდიტის“ მოსწავლე თბილისიდან. აქტიურად ვსწავლობ Full-Stack დეველოპმენტს და მაინტერესებს ელექტრონიკა და რობოტოტექნიკა. მიყვარს ახალი ტექნოლოგიების აღმოჩენა და პრაქტიკული ექსპერიმენტები.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <span>პროექტების ნახვა</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                arrow_downward
              </span>
            </a>
            <a className="btn btn-secondary" href="#contact">
              <span>კონტაქტი</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                mail
              </span>
            </a>
          </div>

          {/* Metrics grid using reusable MetricCard */}
          <div className="hero-metrics">
            {HERO_METRICS.map((metric) => (
              <MetricCard
                key={metric.id}
                icon={metric.icon}
                label={metric.label}
                value={metric.value}
              />
            ))}
          </div>
        </div>

        {/* Right column: Terminal Window */}
        <div>
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">lasha@stem-lab:~</span>
              <span
                className="material-symbols-outlined"
                style={{ color: 'rgba(239, 241, 243, 0.5)', fontSize: '14px' }}
              >
                tune
              </span>
            </div>

            <div className="terminal-body">
              <div className="terminal-command">
                <span className="prompt-sym">$</span>
                <span>cat student_profile.json</span>
              </div>

              <div className="terminal-code-block">
                <p>
                  <span className="key-str">სახელი:</span> "{TERMINAL_PROFILE.name}"
                </p>
                <p>
                  <span className="key-str">სკოლა:</span> "{TERMINAL_PROFILE.school}"
                </p>
                <p>
                  <span className="key-str">კურსი:</span> "{TERMINAL_PROFILE.course}"
                </p>
                <p>
                  <span className="key-str">სტატუსი:</span> "{TERMINAL_PROFILE.status}"
                </p>
                <p>
                  <span className="key-str">ინტერესი:</span>{' '}
                  {JSON.stringify(TERMINAL_PROFILE.interests)}
                </p>
              </div>

              <div className="terminal-status-line">
                <span className="prompt-sym">$</span>
                <span className="cursor-blink">_ სტატუსი: კოდირება მიმდინარეობს</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

