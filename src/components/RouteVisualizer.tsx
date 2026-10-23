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
    <section className="section section-route-visualizer" id="churam-visualizer">
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

        <div className="route-vis-card">
          <div className="route-vis-split">
            <div className="route-vis-img-wrap">
              <img
                src={stageImages[activeStage]}
                alt={currentStep.name}
                className="route-vis-img"
              />
            </div>

            <div className="route-vis-details">
              <span className="route-vis-badge">
                Stage {currentStep.step} / 04 • {currentStep.highlight}
              </span>

              <h3 className="route-vis-step-title">
                {currentStep.name}
              </h3>

              <p className="route-vis-step-desc">
                {currentStep.desc}
              </p>

              <div className="route-vis-nav-btns">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : 3))}
                  className="btn btn-outline btn-sm"
                  aria-label="Previous mountain stage"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < 3 ? prev + 1 : 0))}
                  className="btn btn-terracotta btn-sm"
                  aria-label="Next mountain stage"
                >
                  Next Stage →
                </button>
              </div>
            </div>
          </div>

          {/* Stepper Grid (Responsive on Mobile) */}
          <div className="route-vis-stepper-grid">
            {CHURAM_STORY_STEPS.map((s, idx) => (
              <button
                type="button"
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`route-vis-step-card ${activeStage === idx ? 'active' : ''}`}
                aria-pressed={activeStage === idx}
              >
                <span className="route-vis-step-num">
                  {s.step}
                </span>
                <h4 className="route-vis-step-name">
                  {s.name}
                </h4>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
