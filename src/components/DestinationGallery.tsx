import React, { useState } from 'react';
import { DESTINATIONS } from '../config/brand';
import type { Destination } from '../types';
import { DestinationModal } from './DestinationModal';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

interface DestinationGalleryProps {
  onPlanTripForDestination: (destName: string) => void;
}

export const DestinationGallery: React.FC<DestinationGalleryProps> = ({
  onPlanTripForDestination
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const categories = [
    { id: 'all', label: 'All Sights' },
    { id: 'lake', label: 'Lakes & Dams' },
    { id: 'mountain', label: 'High Peaks' },
    { id: 'waterfall', label: 'Waterfalls' },
    { id: 'heritage', label: 'Ancient Heritage' },
    { id: 'viewpoint', label: 'Ghat Viewpoints' }
  ];

  const filteredDestinations = activeCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === activeCategory);

  return (
    <section className="section" id="destinations">
      <div className="container-wide">
        <div className="section-header">
          <div className="badge-tag">
            <span className="badge-dot" />
            <span>Discover Wayanad</span>
          </div>
          <h2 className="section-title">
            Landscapes Carved by <em>Clouds & Time.</em>
          </h2>
          <p className="section-subtitle">
            From the prehistoric clefts of Edakkal to the heart-shaped waters on Chembra's ridge, explore the true highlights of the Western Ghats with CARLOZ.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="destination-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`destination-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {filteredDestinations.map((dest) => (
            <article key={dest.id} className="destination-card">
              <div
                className="destination-image-wrap"
                onClick={() => setSelectedDestination(dest)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="destination-card-img"
                  loading="lazy"
                />
                <div className="destination-image-overlay" />
                <span className="destination-category-badge">{dest.category}</span>
                <span className="destination-duration-badge">
                  <Clock size={12} />
                  <span>{dest.idealDuration}</span>
                </span>
              </div>

              <div className="destination-card-body">
                <div className="destination-card-title-row">
                  <h3 className="destination-card-title">{dest.name}</h3>
                  {dest.malayalamName && (
                    <span className="destination-malayalam">{dest.malayalamName}</span>
                  )}
                </div>

                <p className="destination-tagline">{dest.tagline}</p>
                <p className="destination-description">{dest.description}</p>

                <div className="destination-highlights-list">
                  {dest.highlights.slice(0, 3).map((h, idx) => (
                    <span key={idx} className="destination-highlight-chip">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="destination-card-footer">
                  <div className="destination-location-info">
                    <MapPin size={13} color="var(--color-amber)" />
                    <span>{dest.location}</span>
                  </div>

                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="destination-explore-link"
                    style={{ background: 'none', border: 'none', padding: 0 }}
                    aria-label={`Explore details of ${dest.name}`}
                  >
                    <span>Explore</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTripForDestination={onPlanTripForDestination}
      />
    </section>
  );
};
