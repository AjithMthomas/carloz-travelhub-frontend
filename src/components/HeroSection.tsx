import React from 'react';
import { buildWhatsAppUrl } from '../config/brand';
import { Phone, MapPin, Compass } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPlanTripClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onPlanTripClick
}) => {
  return (
    <section className="hero-poster" id="hero">
      {/* Background Aerial River Photography */}
      <div className="hero-poster-bg">
        <img
          src="/images/hero_wayanad_river.jpg"
          alt="Aerial top-down view of traditional wooden boat gliding through emerald river waters and wild lotus pads in Wayanad, Kerala"
          className="hero-poster-img"
          fetchPriority="high"
        />
        <div className="hero-poster-vignette" />
      </div>

      <div className="hero-poster-inner">
        {/* Top Meta Row (Matching Reference Image 1 Layout) */}
        <div className="hero-poster-top-row">
          <div className="hero-beyond-borders">
            <span className="hero-sub-caps">BEYOND BORDERS</span>
            <div className="hero-underline-bar" />
          </div>

          <div className="hero-script-brand">
            <span className="hero-script-logo">Carloz</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
              TRAVEL HUB
            </span>
            <span className="hero-script-sub">Escape to the Nature</span>
          </div>
        </div>

        {/* Center Monumental Lettering (Matching Reference 1 "VIETNAM") */}
        <div className="hero-monumental-block">
          <h1 className="hero-monumental-title">WAYANAD</h1>
          
          <div className="hero-poster-mid-row">
            <div className="hero-diff-beautiful">
              <span className="hero-sub-caps" style={{ letterSpacing: '0.22em' }}>
                A DIFFERENT KIND OF BEAUTIFUL
              </span>
              <div className="hero-underline-bar" style={{ width: '60px' }} />
            </div>
          </div>
        </div>

        {/* Bottom Floating Info Pill (Matching Reference Image 1 Bottom Bar) */}
        <div className="hero-bottom-info-pill">
          <div className="hero-pill-call-group">
            <Phone size={16} color="var(--color-terracotta)" />
            <span>Call / WhatsApp:</span>
            <a
              href={buildWhatsAppUrl('6238813608')}
              target="_blank"
              rel="noopener noreferrer"
              className="call-num"
            >
              8281681010 / 6238813608
            </a>
            <span>|</span>
            <a
              href={buildWhatsAppUrl('8157845547')}
              target="_blank"
              rel="noopener noreferrer"
              className="call-num"
            >
              8157845547
            </a>
          </div>

          <div className="hero-pill-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="var(--color-terracotta)" />
              <span>Wayanad, Kerala, India</span>
            </div>
            <span>•</span>
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>
              Led by Faith. Driven by Adventure.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={onExploreClick} className="btn btn-outline btn-sm">
              <Compass size={14} />
              <span>Explore</span>
            </button>
            <button onClick={onPlanTripClick} className="btn btn-terracotta btn-sm">
              <span>Plan Trip</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
