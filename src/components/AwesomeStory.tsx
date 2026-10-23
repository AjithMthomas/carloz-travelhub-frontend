import React from 'react';
import { ArrowRight, Mountain, Compass, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { buildWhatsAppUrl } from '../config/brand';

interface AwesomeStoryProps {
  onPlanTripClick: () => void;
}

export const AwesomeStory: React.FC<AwesomeStoryProps> = ({ onPlanTripClick }) => {
  const stats = [
    {
      icon: <Mountain size={20} />,
      number: '9',
      label: 'Hairpin Curves',
      detail: 'Thamarassery Churam 700m Ascent'
    },
    {
      icon: <Compass size={20} />,
      number: '2,100m',
      label: 'Peak Elevation',
      detail: 'Chembra & Misty Highland Summits'
    },
    {
      icon: <Sparkles size={20} />,
      number: '100%',
      label: 'Customized Trips',
      detail: 'Private Van & Flexible Pacing'
    },
    {
      icon: <ShieldCheck size={20} />,
      number: '4.9★',
      label: 'Route Safety',
      detail: 'Expert Western Ghats Drivers'
    }
  ];

  const experienceTags = [
    'Meppadi Tea Valleys',
    'Kuruva Bamboo Rafts',
    'Edakkal Neolithic Caves',
    'Kurumbalakotta Cloud Sea',
    'Soochipara Forest Falls'
  ];

  return (
    <section className="section section-awesome-story" id="story">
      <div className="container">
        <div className="awesome-story-grid">
          {/* Left Column: Narrative, Stat Cards & Call-To-Action */}
          <div className="awesome-story-narrative">
            <h2 className="section-title">
              Awesome <em>Wayanad.</em>
            </h2>

            <p className="awesome-story-lead">
              Where 9 misty hairpin curves ascend into primeval rainforests, cloud-sea summits, and 6,000-year-old Neolithic legends.
            </p>

            <p className="awesome-story-body">
              From the thrilling ascent of Thamarassery Churam climbing 700 meters through sheer Western Ghats cliffs, to quiet bamboo rafts drifting across Kuruvadweep river canopy, Wayanad is Kerala’s crown jewel for mountain road trips. We make sure your journey is unhurried, comfortable, and tailored to the rhythm of your crew.
            </p>

            {/* Experience Tags Bar */}
            <div className="awesome-tags-wrap" aria-label="Wayanad signature highlights">
              {experienceTags.map((tag, idx) => (
                <span key={idx} className="awesome-tag-pill">
                  <span className="awesome-tag-dot" />
                  {tag}
                </span>
              ))}
            </div>

            {/* 4 Interactive Glassmorphic Stat Cards */}
            <div className="awesome-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="awesome-stat-card">
                  <div className="awesome-stat-icon-wrap">
                    {stat.icon}
                  </div>
                  <div className="awesome-stat-info">
                    <span className="awesome-stat-val">{stat.number}</span>
                    <span className="awesome-stat-lbl">{stat.label}</span>
                    <span className="awesome-stat-det">{stat.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons: Plan Trip + WhatsApp Desk */}
            <div className="awesome-actions-row">
              <button
                onClick={onPlanTripClick}
                className="btn btn-terracotta"
                aria-label="Book your van trip"
              >
                <span>Book Your Van Trip</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={buildWhatsAppUrl('6238813608')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                aria-label="Chat with WhatsApp desk"
              >
                <WhatsAppIcon variant="monochrome" size={17} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Luxury Asymmetric Layered Collage */}
          <div className="awesome-collage-container">
            {/* Background Warm Glow Orb */}
            <div className="awesome-glow-orb" />

            {/* Central Anchor Portrait Card */}
            <div className="awesome-collage-main">
              <img
                src="/images/tea_plantation_mist.jpg"
                alt="Emerald tea estates in Meppadi Wayanad with morning mist"
                className="awesome-collage-img"
                loading="lazy"
              />
              <div className="awesome-collage-overlay" />
              
              {/* Top Route Badge */}
              <div className="awesome-badge-top">
                <span className="awesome-badge-dot" />
                <span>CARLOZ Signature Route</span>
              </div>

              {/* Bottom Location Indicator */}
              <div className="awesome-badge-bottom">
                <MapPin size={14} color="var(--color-terracotta)" />
                <span style={{ fontWeight: 700 }}>Meppadi Valley</span>
                <span style={{ opacity: 0.7 }}>• 1,150m Altitude</span>
              </div>
            </div>

            {/* Top-Right Overlapping Floating Card (Bamboo Rafting) */}
            <div className="awesome-floating-card top-right">
              <div className="awesome-floating-img-wrap">
                <img
                  src="/images/bamboo_raft_kuruva.jpg"
                  alt="Traditional bamboo rafting on Kuruva Island river in Wayanad"
                  className="awesome-floating-img"
                  loading="lazy"
                />
              </div>
              <div className="awesome-floating-caption">
                <span className="floating-caption-title">Kuruva Bamboo Rafts</span>
                <span className="floating-caption-sub">River Canopy Drift</span>
              </div>
            </div>

            {/* Bottom-Left Overlapping Floating Card (Edakkal Caves) */}
            <div className="awesome-floating-card bottom-left">
              <div className="awesome-floating-img-wrap">
                <img
                  src="/images/edakkal_caves_ancient.jpg"
                  alt="Ancient stone petroglyphs at Edakkal Caves Wayanad"
                  className="awesome-floating-img"
                  loading="lazy"
                />
              </div>
              <div className="awesome-floating-caption">
                <span className="floating-caption-title">Edakkal Neolithic Caves</span>
                <span className="floating-caption-sub">6,000 BCE Rock Art</span>
              </div>
            </div>

            {/* Floating Experience Trust Pill */}
            <div className="awesome-trust-pill">
              <div className="trust-stars">★★★★★</div>
              <p className="trust-quote">“Led by Faith. Driven by Adventure.”</p>
              <span className="trust-sub">Wayanad’s Dedicated Van Road Trip Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
