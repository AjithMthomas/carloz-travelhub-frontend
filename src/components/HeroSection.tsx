import React from 'react';
import { buildWhatsAppUrl } from '../config/brand';
import { MapPin, Compass } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

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
      {/* Background Photography with Atmospheric Vignette */}
      <div className="hero-poster-bg">
        <img
          src="/images/hero_bg.png"
          alt="Majestic herd of wild Asian elephants crossing the sunlit jungle river in Wayanad, Kerala with rainforest canopy mist"
          className="hero-poster-img"
          fetchPriority="high"
        />
        {/* Cinematic Multi-Layer Gradient for Flawless Element Blending */}
        <div className="hero-poster-vignette" />
        <div className="hero-poster-light-rays" />
        <div className="hero-poster-mist-blend" />
      </div>

      <div className="hero-poster-inner">
        {/* Top Meta Row (Matching Reference Image 1 Layout) */}
        <div className="hero-poster-top-row">
          <div className="hero-beyond-borders-badge">
            <span className="hero-sub-caps">BEYOND BORDERS</span>
            <div className="hero-underline-bar" />
          </div>

          <div className="hero-script-brand">
            <span className="hero-script-logo">Carloz</span>
            <span className="hero-brand-subcaps">
              TRAVEL HUB
            </span>
            <span className="hero-script-sub">Escape to the Nature</span>
          </div>
        </div>

        {/* Center Monumental Lettering with Safe Padding From Border */}
        <div className="hero-monumental-block">
          <h1 className="hero-monumental-title">WAYANAD</h1>
          
          <div className="hero-poster-mid-row">
            <div className="hero-diff-beautiful">
              <span className="hero-sub-caps" style={{ letterSpacing: '0.24em' }}>
                A DIFFERENT KIND OF BEAUTIFUL
              </span>
              <div className="hero-underline-bar" style={{ width: '64px' }} />
            </div>
          </div>
        </div>

        {/* Bottom Floating Info Pill (Glassmorphic Bar with Official WhatsApp Icon) */}
        <div className="hero-bottom-info-pill">
          <div className="hero-pill-call-group">
            <WhatsAppIcon variant="original" size={24} />
            <span style={{ fontWeight: 600, letterSpacing: '0.02em' }}>WhatsApp:</span>
            <a
              href={buildWhatsAppUrl('6238813608')}
              target="_blank"
              rel="noopener noreferrer"
              className="call-num"
              title="Message Desk 1 on WhatsApp"
            >
              +91 62388 13608
            </a>
            <span className="divider-dot">•</span>
            <a
              href={buildWhatsAppUrl('8157845547')}
              target="_blank"
              rel="noopener noreferrer"
              className="call-num"
              title="Message Desk 2 on WhatsApp"
            >
              +91 81578 45547
            </a>
          </div>

          <div className="hero-pill-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="var(--color-terracotta)" />
              <span>Wayanad, Kerala, India</span>
            </div>
            <span className="divider-dot">•</span>
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>
              Led by Faith. Driven by Adventure.
            </span>
          </div>

          <div className="hero-pill-actions">
            <button
              onClick={onExploreClick}
              className="btn btn-hero-explore btn-sm"
              aria-label="Explore tours and packages"
            >
              <Compass size={14} />
              <span>Explore</span>
            </button>
            <button
              onClick={onPlanTripClick}
              className="btn btn-terracotta btn-sm"
              aria-label="Plan your trip"
            >
              <span>Plan Trip</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
