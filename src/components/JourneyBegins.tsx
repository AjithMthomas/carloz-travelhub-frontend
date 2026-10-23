import React from 'react';
import { BRAND } from '../config/brand';
import { CheckCircle2 } from 'lucide-react';

export const JourneyBegins: React.FC = () => {
  return (
    <section className="section" id="journey-begins">
      <div className="container">
        <div className="journey-grid">
          {/* Visual Column with Asymmetric Floating Badge */}
          <div className="journey-visual">
            <div className="journey-main-image-wrap">
              <img
                src="/images/tea_plantation_mist.jpg"
                alt="Endless rolling emerald tea estates and morning mountain mist in Wayanad"
                className="journey-main-image"
                loading="lazy"
              />
            </div>
            
            <div className="journey-floating-card">
              <h4>The Wayanad Soul</h4>
              <p>
                From the moment your wheels touch the 9 hairpin curves of Thamarassery Churam, the city noise evaporates into cool mist and bamboo rustle.
              </p>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="journey-content">
            <div className="badge-tag badge-tag-sage">
              <span className="badge-dot" />
              <span>Editorial Story</span>
            </div>

            <h2 className="section-title">
              Not Just a Destination. <br />
              <em>A Feeling.</em>
            </h2>

            <p className="journey-lead-p">
              There is a moment on the ascent into Wayanad when the windows fog up, the air drops ten degrees, and the aroma of wet cardamom leaves and roasted highway coffee fills the van.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              At <strong>CARLOZ | TRAVEL HUB</strong>, we believe the best trips are never rushed between ticket counters. They happen during impromptu stops beside tumbling streams, hot pazham pori at roadside shacks, and long conversations while the mist rolls across the mountain pass.
            </p>

            {/* Travel Value Pills */}
            <div className="journey-pills">
              {BRAND.about.pillValues.map((val) => (
                <div key={val} className="journey-pill-item">
                  <CheckCircle2 size={16} />
                  <span>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-amber-light)' }}>
                  100%
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Locally Driven & Guided
                </span>
              </div>
              <div>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-sage-light)' }}>
                  0 Rigid
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Tour Agency Timetables
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
