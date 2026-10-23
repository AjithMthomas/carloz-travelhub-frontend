import React from 'react';
import { buildWhatsAppUrl } from '../config/brand';
import { WhatsAppIcon } from './WhatsAppIcon';

interface TailorMadeBannerProps {
  onPlanTripClick: () => void;
}

export const TailorMadeBanner: React.FC<TailorMadeBannerProps> = ({ onPlanTripClick }) => {
  return (
    <section className="section section-tailor-made" style={{ paddingTop: 0, paddingBottom: 'clamp(4rem, 7vw, 6rem)' }}>
      <div className="container">
        {/* Sunset Card (Cloned from Reference 2 Page 2 Bottom) */}
        <div className="tailor-made-card">
          <img
            src="/images/final_cta_road.jpg"
            alt="Twilight mountain highway in Wayanad Western Ghats"
            className="tailor-made-bg"
            loading="lazy"
          />
          <div className="tailor-made-overlay" />

          <div className="tailor-made-content">
            <h2 className="tailor-made-title">
              Tailor Made Trip.
            </h2>
            <p className="tailor-made-desc">
              Your next story starts on the road. Tell us your dates and dream spots—we handle the driving, route planning, and comfort.
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button onClick={onPlanTripClick} className="btn btn-terracotta">
                <span>Plan Your Trip</span>
              </button>

              <a
                href={buildWhatsAppUrl('6238813608')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsAppIcon variant="monochrome" size={17} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
