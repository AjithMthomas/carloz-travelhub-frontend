import React from 'react';
import type { Destination } from '../types';
import { buildWhatsAppUrl } from '../config/brand';
import { X, Compass, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTripForDestination: (destName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onPlanTripForDestination
}) => {
  if (!destination) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-image-header">
          <img
            src={destination.image}
            alt={destination.name}
            className="modal-image"
          />
          <div className="modal-image-gradient" />
        </div>

        <div className="modal-body">
          <div className="modal-title-row">
            <div>
              <div className="badge-tag badge-tag-sage" style={{ marginBottom: '0.5rem' }}>
                <span className="badge-dot" />
                <span>{destination.category}</span>
              </div>
              <h3 className="modal-title">{destination.name}</h3>
              {destination.malayalamName && (
                <span style={{ fontSize: '1rem', color: 'var(--color-sage-light)', display: 'block', marginTop: '0.2rem' }}>
                  {destination.malayalamName}
                </span>
              )}
            </div>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-amber-light)', fontWeight: 500 }}>
            "{destination.tagline}"
          </p>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
            {destination.description}
          </p>

          <div className="modal-meta-grid">
            <div className="modal-meta-item">
              <span className="meta-label">Ideal Duration</span>
              <span className="meta-value">{destination.idealDuration}</span>
            </div>
            <div className="modal-meta-item">
              <span className="meta-label">Best Season</span>
              <span className="meta-value">{destination.bestTime}</span>
            </div>
            <div className="modal-meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">{destination.location}</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
              Key Highlights & Experiences
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem' }}>
              {destination.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  <Sparkles size={14} color="var(--color-amber)" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                onClose();
                onPlanTripForDestination(destination.name);
              }}
              className="btn btn-primary"
            >
              <Compass size={18} />
              <span>Add to My Trip Plan</span>
            </button>

            <a
              href={buildWhatsAppUrl('6238813608', { destinations: [destination.name] })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon variant="monochrome" size={18} />
              <span>Enquire About {destination.name}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
