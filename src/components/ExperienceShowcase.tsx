import React from 'react';
import { EXPERIENCES } from '../config/brand';
import { Check } from 'lucide-react';

interface ExperienceShowcaseProps {
  onPlanTripClick: () => void;
}

export const ExperienceShowcase: React.FC<ExperienceShowcaseProps> = ({ onPlanTripClick }) => {
  return (
    <section className="section" id="experiences">
      <div className="container-wide">
        <div className="section-header">
          <div className="badge-tag badge-tag-sage">
            <span className="badge-dot" />
            <span>Ways to Wander</span>
          </div>
          <h2 className="section-title">
            Signature Travel <em>Experiences.</em>
          </h2>
          <p className="section-subtitle">
            Whether you are escaping city deadlines with your college gang, seeking misty solitude with your partner, or taking a family road trip, we tailor every mile to your rhythm.
          </p>
        </div>

        <div className="experiences-grid">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-image-wrap">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="experience-image"
                  loading="lazy"
                />
              </div>

              <div className="experience-card-body">
                <span className="experience-tag">{exp.tag}</span>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-desc">{exp.description}</p>

                <ul className="experience-feature-list">
                  {exp.features.map((feat, idx) => (
                    <li key={idx} className="experience-feature-item">
                      <Check size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-footer-row">
                  <span className="experience-vibe-tag">
                    ✨ {exp.vibe}
                  </span>

                  <button
                    onClick={onPlanTripClick}
                    className="btn btn-outline btn-sm"
                  >
                    <span>Plan This</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
