import React, { useState } from 'react';
import { buildWhatsAppUrl } from '../config/brand';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="floating-wa-wrap" aria-label="Direct WhatsApp Contact">
      {open && (
        <div className="floating-wa-menu" role="dialog" aria-label="Choose WhatsApp Desk">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.45rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <WhatsAppIcon variant="original" size={20} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 800, color: 'var(--text-headline)' }}>
                Chat with CARLOZ
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              aria-label="Close options"
            >
              <X size={16} />
            </button>
          </div>

          <a
            href={buildWhatsAppUrl('6238813608')}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa-option"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon variant="original" size={34} />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Desk 1 (Primary)</span>
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#128c7e' }}>+91 62388 13608</span>
            </div>
          </a>

          <a
            href={buildWhatsAppUrl('8157845547')}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-wa-option"
            onClick={() => setOpen(false)}
          >
            <WhatsAppIcon variant="original" size={34} />
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Desk 2 (Coordinator)</span>
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#128c7e' }}>+91 81578 45547</span>
            </div>
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="floating-wa-btn"
        aria-label="Open WhatsApp options"
        title="Chat on WhatsApp"
      >
        {open ? <X size={24} /> : <WhatsAppIcon variant="monochrome" size={28} color="#ffffff" />}
      </button>
    </aside>
  );
};
