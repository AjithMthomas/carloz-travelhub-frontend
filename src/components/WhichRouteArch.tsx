import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WhichRouteArchProps {
  onSelectRoute: (routeName: string) => void;
}

export const WhichRouteArch: React.FC<WhichRouteArchProps> = ({ onSelectRoute }) => {
  const routes = [
    {
      id: 'churam-route',
      name: 'CHURAM PASS',
      subtitle: '9 Hairpin Curves & Sunset Viewpoint',
      image: '/images/wayanad_sunset_view.jpg'
    },
    {
      id: 'chembra-route',
      name: 'HEART LAKE RIDGE',
      subtitle: 'Alpine Grasslands & High Cloud Sea',
      image: '/images/chembra_peak_view.jpg'
    },
    {
      id: 'waterfall-route',
      name: 'WATERFALL TRAILS',
      subtitle: 'Wild Cascades & Bamboo Rafting',
      image: '/images/soochipara_waterfall.jpg'
    }
  ];

  return (
    <section className="section doorways-section section-which-route" id="routes">
      <div className="container">
        <h2 className="doorways-title">
          WHICH ROUTE ARE YOU GONNA CHOOSE?
        </h2>

        {/* 3 Arched Doorways (Cloned from Reference 2 Page 2 Center) */}
        <div className="doorways-grid">
          {routes.map((r) => (
            <div
              key={r.id}
              className="doorway-card"
              onClick={() => onSelectRoute(r.name)}
            >
              <img
                src={r.image}
                alt={r.name}
                className="doorway-img"
                loading="lazy"
              />
              <div className="doorway-overlay">
                <h3 className="doorway-name">{r.name}</h3>
                <p className="doorway-sub">{r.subtitle}</p>
                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: 'var(--color-terracotta)', fontWeight: 700, fontSize: '0.85rem' }}>
                  <span>Choose This Route</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
