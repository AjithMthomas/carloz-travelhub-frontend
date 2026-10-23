import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../config/brand';

interface AwesomeStoryProps {
  onPlanTripClick: () => void;
}

export const AwesomeStory: React.FC<AwesomeStoryProps> = ({ onPlanTripClick }) => {
  const highlights = [
    { label: 'Thamarassery Churam 9 Hairpins' },
    { label: 'Meppadi Highland Tea Estates' },
    { label: 'Kuruvadweep Bamboo Rafting' },
    { label: 'Edakkal 6,000 BCE Petroglyphs' }
  ];

  return (
    <section className="section section-awesome-story" id="story">
      <div className="container">
        <div className="wayanad-modern-grid">
          {/* Left Column: Narrative & Clean Metric Row */}
          <div className="wayanad-content-pane">
            <h2 className="section-title">
              Awesome <em>Wayanad.</em>
            </h2>

            <p className="wayanad-lead-text">
              Highland ghat roads climbing 700 meters through the clouds, primeval rainforest canopy, and ancient prehistoric legends.
            </p>

            <p className="wayanad-narrative-text">
              Rising into the Western Ghats, Wayanad is Kerala’s crown jewel for mountain road trips. We navigate the district with deliberate, relaxed pacing in our custom travel van—stopping for fresh cardamom tea along misty viewpoints, listening to mountain waterfalls, and sharing laughter on your own schedule.
            </p>

            {/* Clean Experience Chips */}
            <div className="wayanad-highlights-bar" aria-label="Wayanad signature highlights">
              {highlights.map((h, i) => (
                <span key={i} className="wayanad-highlight-chip">
                  {h.label}
                </span>
              ))}
            </div>

            {/* Clean Minimalist Metrics (Apple/Linear Editorial Trend) */}
            <div className="wayanad-metrics-strip">
              <div className="wayanad-metric-col">
                <span className="wayanad-metric-num">09</span>
                <span className="wayanad-metric-title">Hairpin Curves</span>
                <span className="wayanad-metric-desc">Thamarassery Churam ascent</span>
              </div>

              <div className="wayanad-metric-divider" />

              <div className="wayanad-metric-col">
                <span className="wayanad-metric-num">2,100m</span>
                <span className="wayanad-metric-title">Peak Altitude</span>
                <span className="wayanad-metric-desc">Chembra highland summit</span>
              </div>

              <div className="wayanad-metric-divider" />

              <div className="wayanad-metric-col">
                <span className="wayanad-metric-num">100%</span>
                <span className="wayanad-metric-title">Custom Van Trips</span>
                <span className="wayanad-metric-desc">Flexible road pacing & crew</span>
              </div>
            </div>

            {/* Actions: Clean Plan Trip Button + WhatsApp Quick Desk */}
            <div className="wayanad-cta-row">
              <button
                onClick={onPlanTripClick}
                className="btn btn-terracotta"
                aria-label="Book your custom trip"
              >
                <span>Book Your Van Trip</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={buildWhatsAppUrl('6238813608')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Enquire via WhatsApp"
              >
                <WhatsAppIcon variant="monochrome" size={16} />
                <span>WhatsApp Desk</span>
                <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Modern Photo Grid (Neat, Crisp, Human-Crafted) */}
          <div className="wayanad-gallery-pane">
            {/* Primary Main Visual Frame */}
            <div className="gallery-primary-card">
              <img
                src="/images/tea_plantation_mist.jpg"
                alt="Meppadi emerald tea estates surrounded by morning mountain mist in Wayanad"
                className="gallery-primary-img"
                loading="lazy"
              />
              <div className="gallery-card-caption">
                <span className="gallery-caption-place">Meppadi Highland Valley</span>
                <span className="gallery-caption-tag">1,150m • Tea Estates & Mist</span>
              </div>
            </div>

            {/* Secondary Dual Visual Cards Below */}
            <div className="gallery-sub-grid">
              <div className="gallery-sub-card">
                <img
                  src="/images/bamboo_raft_kuruva.jpg"
                  alt="Bamboo rafting down the serene Kabini river tributaries at Kuruva Island"
                  className="gallery-sub-img"
                  loading="lazy"
                />
                <div className="gallery-sub-overlay">
                  <span>Kuruvadweep Bamboo Rafts</span>
                </div>
              </div>

              <div className="gallery-sub-card">
                <img
                  src="/images/edakkal_caves_ancient.jpg"
                  alt="Ancient Neolithic stone engravings inside Edakkal Caves Wayanad"
                  className="gallery-sub-img"
                  loading="lazy"
                />
                <div className="gallery-sub-overlay">
                  <span>Edakkal Neolithic Caves</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
