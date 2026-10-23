import React from 'react';
import { buildWhatsAppUrl } from '../config/brand';
import { Compass, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FinalCTAProps {
  onPlanTripClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onPlanTripClick }) => {
  return (
    <section className="final-cta-section" id="contact">
      <div className="final-cta-bg-wrap">
        <img
          src="/images/final_cta_road.jpg"
          alt="Atmospheric twilight winding mountain highway in Wayanad Western Ghats"
          className="final-cta-bg"
          loading="lazy"
        />
        <div className="final-cta-overlay" />
      </div>

      <div className="container">
        <div className="final-cta-content">
          <div className="badge-tag">
            <span className="badge-dot" />
            <span>Ready for the road</span>
          </div>

          <h2 className="final-cta-title">
            Your Next Story Starts <br />
            <em>on the Road.</em>
          </h2>

          <p className="final-cta-sub">
            Tell us where you want to go. Whether it is a quick weekend reset or an all-out mountain expedition with the gang, let's plan the journey together.
          </p>

          <div className="final-cta-buttons">
            <button
              onClick={onPlanTripClick}
              className="btn btn-primary btn-lg"
            >
              <Compass size={20} />
              <span>Plan Your Trip</span>
            </button>

            <a
              href={buildWhatsAppUrl('6238813608')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <WhatsAppIcon variant="monochrome" size={20} />
              <span>Chat on WhatsApp (+91 62388 13608)</span>
            </a>

            <a
              href={buildWhatsAppUrl('8157845547')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-glass btn-lg"
            >
              <Phone size={18} />
              <span>Coordinator (+91 81578 45547)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
