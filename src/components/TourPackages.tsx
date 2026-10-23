import React from 'react';
import { PACKAGES, buildWhatsAppUrl } from '../config/brand';
import { Check, Clock, MessageCircle, Navigation, Send } from 'lucide-react';

interface TourPackagesProps {
  onSelectPackageForEnquiry: (packageName: string) => void;
}

export const TourPackages: React.FC<TourPackagesProps> = ({ onSelectPackageForEnquiry }) => {
  return (
    <section className="section" id="packages">
      <div className="container-wide">
        <div className="section-header">
          <div className="badge-tag">
            <span className="badge-dot" />
            <span>Curated Journeys</span>
          </div>
          <h2 className="section-title">
            Featured Tour <em>Packages.</em>
          </h2>
          <p className="section-subtitle">
            Authentic, transparent road-trip itineraries. Fully customizable based on your group size, arrival station, and budget. Transparent pricing provided directly via WhatsApp.
          </p>
        </div>

        <div className="packages-grid">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`package-card ${pkg.isPopular ? 'popular' : ''}`}
            >
              {pkg.isPopular && (
                <div className="popular-badge">
                  ★ {pkg.badge || 'Most Popular'}
                </div>
              )}

              <div className="package-image-wrap">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="package-image"
                  loading="lazy"
                />
                <div className="package-duration-pill">
                  <Clock size={13} />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              <div className="package-body">
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-amber-light)', marginBottom: '0.25rem' }}>
                  {pkg.tag}
                </span>

                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-subtitle">{pkg.subtitle}</p>

                <div className="package-route-box">
                  <span className="package-route-label">
                    <Navigation size={11} style={{ display: 'inline', marginRight: '4px' }} />
                    Scenic Route
                  </span>
                  {pkg.route}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.4rem' }}>
                    What's Included:
                  </span>
                  <ul className="package-inclusions-list">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="package-inclusion-item">
                        <Check size={14} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-price-row">
                  <div className="package-price-info">
                    <span className="package-price-label">Quotation</span>
                    <span className="package-price-val">{pkg.priceNote}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.65rem' }}>
                    <button
                      onClick={() => onSelectPackageForEnquiry(pkg.title)}
                      className="btn btn-primary btn-sm"
                    >
                      <Send size={14} />
                      <span>Plan This</span>
                    </button>

                    <a
                      href={buildWhatsAppUrl('6238813608', { packageName: pkg.title })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      title="Enquire directly on WhatsApp"
                    >
                      <MessageCircle size={15} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
