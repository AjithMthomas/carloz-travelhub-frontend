import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl } from '../config/brand';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeaderProps {
  onPlanTripClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPlanTripClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'About Us', href: '#about-us' },
    { name: 'All Tours', href: '#tours' },
    { name: 'Routes', href: '#routes' },
    { name: 'FAQs', href: '#faqs' }
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-wide">
          <div className="nav-wrapper">
            <a href="#" className="brand-link" aria-label="CARLOZ Travel Hub Home">
              <div>
                <span className="brand-title">
                  CARLOZ <span>|</span> TRAVEL HUB
                </span>
                <span className="brand-tagline-sub">Led by Faith. Driven by Adventure.</span>
              </div>
            </a>

            <nav className="desktop-nav" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <a
                href={buildWhatsAppUrl('6238813608')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
                title="Chat on WhatsApp (+91 6238813608)"
              >
                <WhatsAppIcon variant="monochrome" size={16} />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onPlanTripClick}
                className="btn btn-terracotta btn-sm"
              >
                Plan Trip
              </button>

              <button
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div>
            <span className="brand-title" style={{ color: 'var(--text-headline)' }}>
              CARLOZ <span>|</span> TRAVEL HUB
            </span>
            <span className="brand-tagline-sub" style={{ color: 'var(--color-terracotta)' }}>
              Led by Faith. Driven by Adventure.
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
            aria-label="Close menu"
          >
            <X size={24} color="var(--text-headline)" />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#planner"
            className="mobile-nav-link"
            style={{ color: 'var(--color-terracotta)' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onPlanTripClick();
            }}
          >
            Plan Your Journey ★
          </a>
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            📍 Wayanad, Kerala, India
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <a
              href={buildWhatsAppUrl('6238813608')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
            >
              <WhatsAppIcon variant="monochrome" size={15} />
              <span>Desk 1</span>
            </a>
            <a
              href={buildWhatsAppUrl('8157845547')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
            >
              <WhatsAppIcon variant="monochrome" size={15} />
              <span>Desk 2</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
