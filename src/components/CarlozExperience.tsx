import React from 'react';
import { VEHICLE_DETAILS, buildWhatsAppUrl } from '../config/brand';
import { Compass, Music, Luggage, Users } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface CarlozExperienceProps {
  onPlanTripClick: () => void;
}

export const CarlozExperience: React.FC<CarlozExperienceProps> = ({ onPlanTripClick }) => {
  return (
    <section className="section carloz-vehicle-section" id="van-experience">
      <div className="container">
        <div className="vehicle-showcase-grid">
          {/* Visual Showcase with Real Vehicle Branding */}
          <div className="vehicle-image-composition">
            <div className="vehicle-featured-image-wrap">
              <img
                src="/images/van_roadtrip_vibe.jpg"
                alt="CARLOZ Travel Hub customized tour vehicle overlooking misty Western Ghats mountains in Wayanad"
                className="vehicle-featured-image"
                loading="lazy"
              />
            </div>
            <div className="vehicle-badge-overlay">
              <span>★ Signature CARLOZ Tour Van</span>
            </div>
          </div>

          {/* Editorial Copy and Specific Features */}
          <div>
            <div className="badge-tag">
              <span className="badge-dot" />
              <span>The Road-Trip Machine</span>
            </div>

            <h2 className="section-title">
              {VEHICLE_DETAILS.title.split('as Beautiful')[0]}
              <em>as Beautiful as the Destination.</em>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              {VEHICLE_DETAILS.subtitle}
            </p>

            <div className="vehicle-feature-cards">
              <div className="vehicle-feature-box">
                <div className="icon-wrap">
                  <Compass size={18} />
                </div>
                <h4>Western Ghats Ready</h4>
                <p>Designed and driven for steep hairpin curves, misty passes, and high-range forest corridors.</p>
              </div>

              <div className="vehicle-feature-box">
                <div className="icon-wrap">
                  <Users size={18} />
                </div>
                <h4>Group Comfort</h4>
                <p>Spacious, comfortable seating so your whole gang travels together in one shared vibe.</p>
              </div>

              <div className="vehicle-feature-box">
                <div className="icon-wrap">
                  <Luggage size={18} />
                </div>
                <h4>Luggage Space</h4>
                <p>Generous luggage storage and roof rack capacity for backpacks, camping tents, and gear.</p>
              </div>

              <div className="vehicle-feature-box">
                <div className="icon-wrap">
                  <Music size={18} />
                </div>
                <h4>Road Trip Vibe</h4>
                <p>Bluetooth music connectivity, charging points, and the freedom to pause for photos whenever you want.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <button onClick={onPlanTripClick} className="btn btn-primary">
                Book Van For Your Trip
              </button>

              <a
                href={buildWhatsAppUrl('6238813608', { specialRequests: 'Inquiring about CARLOZ travel vehicle availability & rates' })}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon variant="monochrome" size={18} />
                <span>Check Van Availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
