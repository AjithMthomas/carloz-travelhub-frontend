import React, { useState } from 'react';
import { PACKAGES, buildWhatsAppUrl } from '../config/brand';
import { Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ExploreAllToursProps {
  onSelectPackageForPlanner: (packageName: string) => void;
}

export const ExploreAllTours: React.FC<ExploreAllToursProps> = ({
  onSelectPackageForPlanner
}) => {
  const [activeTab, setActiveTab] = useState('ALL');

  const tabs = [
    { id: 'ALL', label: 'All Tours' },
    { id: 'WEEKEND', label: 'Weekend Escapes' },
    { id: 'GANG', label: 'Friends Gang' },
    { id: 'CUSTOM', label: 'Bespoke Private' }
  ];

  const filteredPackages = activeTab === 'ALL'
    ? PACKAGES
    : PACKAGES.filter((p) => {
        if (activeTab === 'WEEKEND') return p.id.includes('weekend');
        if (activeTab === 'GANG') return p.id.includes('gangs');
        if (activeTab === 'CUSTOM') return p.id.includes('custom');
        return true;
      });

  return (
    <section className="section tours-section section-explore-tours" id="tours">
      <div className="container">
        {/* Giant Centered Headline (Cloned from Reference 2 Page 2) */}
        <div className="tours-hero-banner">
          <h2 className="tours-giant-title">EXPLORE ALL TOURS</h2>
          
          {/* Category Filter Tabs */}
          <div className="tours-tabs-bar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tour-tab-item ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Vertical Tour Cards (Cloned from Reference 2) */}
        <div className="tours-cards-grid">
          {filteredPackages.map((pkg) => (
            <article key={pkg.id} className="tour-package-card">
              <div className="tour-package-img-wrap">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="tour-package-img"
                  loading="lazy"
                />
              </div>

              <div className="tour-package-body">
                <span style={{ fontSize: '0.72rem', color: 'var(--color-terracotta)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                  {pkg.tag}
                </span>

                <h3 className="tour-package-name">{pkg.title}</h3>
                
                <p className="tour-meta-text">
                  <strong>{pkg.duration}</strong> <br />
                  <span>{pkg.priceNote}</span>
                </p>

                <div style={{ display: 'flex', gap: '0.5rem', width: '100%', marginTop: 'auto' }}>
                  <button
                    onClick={() => onSelectPackageForPlanner(pkg.title)}
                    className="btn btn-outline btn-sm"
                    style={{ flex: 1 }}
                  >
                    <Send size={13} />
                    <span>Plan</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl('6238813608', { packageName: pkg.title })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ flex: 1.2 }}
                    title="Enquire on WhatsApp"
                  >
                    <WhatsAppIcon variant="monochrome" size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
