import React, { useState } from 'react';
import { FAQS, buildWhatsAppUrl } from '../config/brand';
import { ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section section-faqs" id="faqs">
      <div className="container">
        {/* Two-Column FAQ Layout (Cloned from Reference 2 Page 2) */}
        <div className="faqs-layout">
          <div className="faq-left-block">
            <div className="badge-pill">
              <span className="dot" />
              <span>Questions & Answers</span>
            </div>

            <h2 className="section-title">
              FAQS.
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: '1.65', marginBottom: '2rem' }}>
              Clear answers regarding our travel vehicle, custom itineraries, pickup points from Calicut or Mysore, and booking procedures.
            </p>

            <a
              href={buildWhatsAppUrl('6238813608')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terracotta"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
            >
              <WhatsAppIcon variant="monochrome" size={18} />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>

          <div>
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className={`faq-card-item ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-btn"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      color="var(--color-terracotta)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms ease'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
