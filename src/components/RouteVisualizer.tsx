import React, { useState } from 'react';
import { CHURAM_STORY_STEPS } from '../config/brand';

export const RouteVisualizer: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stageImages = [
    '/images/wayanad_sunset_view.jpg',
    '/images/hero_wayanad_van.jpg',
    '/images/tea_plantation_mist.jpg',
    '/images/banasura_sagar_dam.jpg'
  ];

  const currentStep = CHURAM_STORY_STEPS[activeStage];

  return (
    <section className="section" style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span className="dot" />
            <span>Interactive Mountain Route</span>
          </div>
          <h2 className="section-title">
            Ascending into the <em>Mist.</em>
          </h2>
          <p className="section-subtitle">
            Experience the legendary ascent through the 9 hairpin curves of Thamarassery Churam up into the high plateau of Wayanad.
          </p>
        </div>

        <div style={{ background: 'var(--bg-surface-warm)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2.5rem', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', aspectRatio: '16 / 10', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-light)' }}>
              <img
                src={stageImages[activeStage]}
                alt={currentStep.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 400ms ease' }}
              />
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-terracotta)', letterSpacing: '0.1em' }}>
                Stage {currentStep.step} / 04 • {currentStep.highlight}
              </span>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-headline)', margin: '0.5rem 0 1rem 0' }}>
                {currentStep.name}
              </h3>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                {currentStep.desc}
              </p>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : 3))}
                  className="btn btn-outline btn-sm"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < 3 ? prev + 1 : 0))}
                  className="btn btn-terracotta btn-sm"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>

          {/* Stepper Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '2.5rem' }}>
            {CHURAM_STORY_STEPS.map((s, idx) => (
              <div
                key={s.step}
                onClick={() => setActiveStage(idx)}
                style={{
                  padding: '1.15rem 1rem',
                  background: activeStage === idx ? '#ffffff' : 'transparent',
                  border: activeStage === idx ? '2px solid var(--color-terracotta)' : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  transition: 'all 200ms ease'
                }}
              >
                <span style={{ fontFamily: 'var(--font-monumental)', fontSize: '1.4rem', fontWeight: 800, color: activeStage === idx ? 'var(--color-terracotta)' : 'var(--text-muted)' }}>
                  {s.step}
                </span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-headline)', margin: '0.25rem 0' }}>
                  {s.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
