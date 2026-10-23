import React from 'react';
import { Compass, Users, Sparkles } from 'lucide-react';

interface WeCreateTripsProps {
  onPlanTripClick: () => void;
}

export const WeCreateTrips: React.FC<WeCreateTripsProps> = ({ onPlanTripClick }) => {
  return (
    <section className="section create-trips-section" id="about-us">
      <div className="container">
        <div className="create-trips-grid">
          {/* Left Column: Authentic Travel Photo (Reference 2 Left Side) */}
          <div className="create-trips-photo-wrap">
            <img
              src="/images/van_roadtrip_vibe.jpg"
              alt="CARLOZ Travel Hub signature tour van parked at scenic misty overlook in Wayanad"
              className="create-trips-photo"
              loading="lazy"
            />
          </div>

          {/* Right Column: Editorial Text & 3 Pill Features (Reference 2 Right Side) */}
          <div className="create-trips-content">
            <div className="badge-pill" style={{ alignSelf: 'flex-start' }}>
              <span className="dot" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="create-trips-title">
              We create the trips <em>you love.</em>
            </h2>

            <p className="create-trips-lead">
              Born from a love for the winding passes, bamboo forests, and hidden waterfalls of Wayanad, CARLOZ | TRAVEL HUB crafts soulful, unhurried journeys for friends, families, and adventure seekers.
            </p>

            <div className="feature-pill-cards">
              <div className="feature-pill-card">
                <div className="feature-icon-circle">
                  <Compass size={20} />
                </div>
                <div className="feature-pill-info">
                  <h4>Signature Mountain Van</h4>
                  <p>Specially customized for Ghat roads with spacious legroom, Bluetooth audio, and roof rack.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle">
                  <Sparkles size={20} />
                </div>
                <div className="feature-pill-info">
                  <h4>Unhurried Custom Pacing</h4>
                  <p>Zero rigid group agency timetables. Stop for hot tea or waterfall photos whenever you wish.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle">
                  <Users size={20} />
                </div>
                <div className="feature-pill-info">
                  <h4>College Gang & Family Ready</h4>
                  <p>Travel together in one shared vibe without the friction of splitting into multiple cabs.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button onClick={onPlanTripClick} className="btn btn-terracotta">
                <span>Plan Your Journey With Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
