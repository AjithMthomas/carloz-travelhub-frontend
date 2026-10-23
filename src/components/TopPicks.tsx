import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TopPicksProps {
  onSelectDestination: (destName: string) => void;
  onSeeAllClick: () => void;
}

export const TopPicks: React.FC<TopPicksProps> = ({
  onSelectDestination,
  onSeeAllClick
}) => {
  const picks = [
    {
      id: 'kurumbalakotta-hill',
      name: 'KURUMBALAKOTTA',
      category: 'Monolith Sunrise & Cloud Sea',
      image: '/images/wayanad_sunset_view.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'kandi-900',
      name: '900 KANDI GLASS BRIDGE',
      category: 'Rainforest Skywalk & Eco Park',
      image: '/images/tea_plantation_mist.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'chembra-lake',
      name: 'CHEMBRA PEAK',
      category: 'Heart-Shaped Lake Trek',
      image: '/images/chembra_peak_view.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'banasura-dam',
      name: 'BANASURA DAM',
      category: 'Island Cruise & Waters',
      image: '/images/banasura_sagar_dam.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'en-ooru-village',
      name: 'EN OORU HERITAGE',
      category: 'Tribal Culture Village',
      image: '/images/bamboo_raft_kuruva.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'churam-pass',
      name: 'CHURAM DRIVE',
      category: '9 Hairpins & Sunset Pass',
      image: '/images/final_cta_road.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'soochipara-falls',
      name: 'SOOCHIPARA FALLS',
      category: 'Rainforest Cascade Pool',
      image: '/images/soochipara_waterfall.jpg',
      price: 'Price on Enquiry'
    },
    {
      id: 'karapuzha-dam',
      name: 'KARAPUZHA DAM',
      category: 'Adventure Park & Reservoir',
      image: '/images/hero_wayanad_river.jpg',
      price: 'Price on Enquiry'
    }
  ];

  return (
    <section className="section picks-section section-destinations" id="destinations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Top Picks in <em>Wayanad.</em>
          </h2>
          <p className="section-subtitle">
            Iconic mountain viewpoints, tranquil waters, and lush Western Ghats trails navigated in our custom travel vehicle.
          </p>
        </div>

        {/* 4 Portrait Cards matching Reference 2 */}
        <div className="picks-grid">
          {picks.map((pick) => (
            <div
              key={pick.id}
              className="pick-card"
              onClick={() => onSelectDestination(pick.name)}
            >
              <div className="pick-card-img-wrap">
                <img
                  src={pick.image}
                  alt={pick.name}
                  className="pick-card-img"
                  loading="lazy"
                />
              </div>

              <div className="pick-card-body">
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  {pick.category}
                </span>
                <h3 className="pick-card-title">{pick.name}</h3>

                <div className="pick-card-footer">
                  <span className="pick-card-price">{pick.price}</span>
                  <button
                    className="pick-card-circle-btn"
                    aria-label={`View ${pick.name}`}
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button onClick={onSeeAllClick} className="btn btn-terracotta">
            <span>Explore All Sights & Packages</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
