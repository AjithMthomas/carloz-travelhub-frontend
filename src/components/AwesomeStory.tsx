import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AwesomeStoryProps {
  onPlanTripClick: () => void;
}

export const AwesomeStory: React.FC<AwesomeStoryProps> = ({ onPlanTripClick }) => {
  return (
    <section className="section section-awesome-story" id="story">
      <div className="container">
        <div className="awesome-story-grid">
          {/* Left Column: Narrative & Stats Row (Reference 2 Layout) */}
          <div>
            <div className="badge-pill">
              <span className="dot" />
              <span>Western Ghats Soul</span>
            </div>

            <h2 className="section-title">
              Awesome <em>Wayanad.</em>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              From the historic 9 hairpin curves of Thamarassery Churam climbing 700 meters into the clouds, to the ancient Neolithic petroglyphs inside Edakkal Caves, Wayanad is Kerala’s crown jewel for mountain road trips.
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: '1.65' }}>
              Whether you are chasing the monsoon roar of Soochipara Falls or paddling serene bamboo rafts through Kuruvadweep river canopy, we make sure your journey is comfortable, safe, and unforgettable.
            </p>

            {/* Stats Counter Row (Matching Reference 2 "400+ 12K 2Y") */}
            <div className="stats-counter-row">
              <div className="stat-box">
                <span className="stat-number">9</span>
                <span className="stat-desc">Hairpin Curves</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">2,100m</span>
                <span className="stat-desc">Peak Elevation</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-desc">Custom Trips</span>
              </div>
            </div>

            <button onClick={onPlanTripClick} className="btn btn-terracotta">
              <span>Book Your Van Trip</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 3 Layered Overlapping Photos (Matching Reference 2) */}
          <div className="layered-photos-composition">
            <div className="layered-card-main">
              <img
                src="/images/tea_plantation_mist.jpg"
                alt="Emerald tea estates in Meppadi Wayanad with morning mist"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            <div className="layered-cards-col">
              <div className="layered-card-sub">
                <img
                  src="/images/bamboo_raft_kuruva.jpg"
                  alt="Traditional bamboo rafting on Kuruva Island river in Wayanad"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              <div className="layered-card-sub">
                <img
                  src="/images/edakkal_caves_ancient.jpg"
                  alt="Ancient stone petroglyphs at Edakkal Caves Wayanad"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
