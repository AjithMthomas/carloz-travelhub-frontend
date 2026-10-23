import React from 'react';
import { INSTAGRAM_POSTS, BRAND } from '../config/brand';
import { Heart, MapPin, Play, ExternalLink } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const InstagramGallery: React.FC = () => {
  return (
    <section className="section" id="gallery">
      <div className="container-wide">
        <div className="section-header">
          <div className="badge-tag">
            <span className="badge-dot" />
            <span>Visual Journal</span>
          </div>
          <h2 className="section-title">
            Life Looks Better <em>Out Here.</em>
          </h2>
          <p className="section-subtitle">
            Glimpses from recent road trips, misty morning chai stops, and the unmistakable CARLOZ van exploring the Western Ghats. Follow our journey on Instagram.
          </p>
        </div>

        <div className="instagram-grid">
          {INSTAGRAM_POSTS.map((post) => (
            <article key={post.id} className="instagram-card">
              <div className="instagram-image-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="instagram-img"
                  loading="lazy"
                />
                <span className="instagram-tag-badge">{post.tag}</span>
                <div className="instagram-type-badge">
                  {post.type === 'reel' ? <Play size={14} fill="#fff" /> : <InstagramIcon size={14} />}
                </div>
              </div>

              <div className="instagram-body">
                <div className="instagram-location">
                  <MapPin size={13} color="var(--color-amber)" />
                  <span>{post.location}</span>
                </div>

                <p className="instagram-caption">{post.caption}</p>

                <div className="instagram-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ff6b6b' }}>
                    <Heart size={14} fill="#ff6b6b" />
                    <span style={{ fontSize: '0.78rem', fontWeight: 600 }}>{post.likes}</span>
                  </div>

                  <a
                    href={BRAND.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-amber-light)', fontSize: '0.78rem', fontWeight: 600 }}
                  >
                    <span>View Reel</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-glass"
          >
            <InstagramIcon size={18} />
            <span>Follow {BRAND.social.instagramHandle} on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
