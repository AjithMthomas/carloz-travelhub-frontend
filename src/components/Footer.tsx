import React from 'react';
import { BRAND, buildWhatsAppUrl } from '../config/brand';
import { MessageCircle, MapPin } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* 4 Clean Columns matching Reference 2 Footer */}
        <div className="footer-columns-grid">
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-headline)', letterSpacing: '0.04em' }}>
                CARLOZ <span style={{ color: 'var(--color-terracotta)' }}>|</span> TRAVEL HUB
              </span>
              <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.15rem', color: 'var(--color-terracotta)', display: 'block' }}>
                Led by Faith. Driven by Adventure.
              </span>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '300px', marginBottom: '1.25rem' }}>
              Your dedicated mountain road-trip and tour service in Wayanad, Kerala. Customized group journeys, college trips, and scenic tours.
            </p>

            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--color-terracotta)', fontWeight: 600 }}
            >
              <InstagramIcon size={16} />
              <span>{BRAND.social.instagramHandle}</span>
            </a>
          </div>

          <div>
            <h4 className="footer-col-head">Menu</h4>
            <ul className="footer-links-list">
              <li><a href="#destinations" className="footer-link">Destinations</a></li>
              <li><a href="#about-us" className="footer-link">About Us</a></li>
              <li><a href="#tours" className="footer-link">All Tours</a></li>
              <li><a href="#routes" className="footer-link">Choose Route</a></li>
              <li><a href="#faqs" className="footer-link">FAQs</a></li>
              <li><a href="#planner" className="footer-link">Plan Trip</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-head">Top Sights</h4>
            <ul className="footer-links-list">
              <li><a href="#destinations" className="footer-link">Thamarassery Churam</a></li>
              <li><a href="#destinations" className="footer-link">Chembra Heart Lake</a></li>
              <li><a href="#destinations" className="footer-link">Banasura Sagar Dam</a></li>
              <li><a href="#destinations" className="footer-link">Soochipara Waterfalls</a></li>
              <li><a href="#destinations" className="footer-link">Edakkal Caves</a></li>
              <li><a href="#destinations" className="footer-link">Kuruvadweep River</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-head">Contact Us</h4>
            <div className="footer-contact-item">
              <MapPin size={15} color="var(--color-terracotta)" />
              <span>{BRAND.location}</span>
            </div>

            <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a
                href={buildWhatsAppUrl('6238813608')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.85rem', background: 'rgba(37, 211, 102, 0.08)', border: '1px solid rgba(37, 211, 102, 0.25)', borderRadius: 'var(--radius-pill)', color: '#128c7e', fontSize: '0.82rem', fontWeight: 600 }}
              >
                <MessageCircle size={14} color="#25d366" />
                <span>Desk 1: +91 62388 13608</span>
              </a>

              <a
                href={buildWhatsAppUrl('8157845547')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.85rem', background: 'rgba(37, 211, 102, 0.08)', border: '1px solid rgba(37, 211, 102, 0.25)', borderRadius: 'var(--radius-pill)', color: '#128c7e', fontSize: '0.82rem', fontWeight: 600 }}
              >
                <MessageCircle size={14} color="#25d366" />
                <span>Desk 2: +91 81578 45547</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <span>© {new Date().getFullYear()} CARLOZ | TRAVEL HUB. All rights reserved.</span>
          <span>Wayanad, Western Ghats • Led by Faith, Driven by Adventure</span>
        </div>
      </div>
    </footer>
  );
};
