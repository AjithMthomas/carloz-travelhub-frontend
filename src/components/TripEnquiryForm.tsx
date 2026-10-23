import React, { useState } from 'react';
import type { TripEnquiryData } from '../types';
import { buildWhatsAppUrl } from '../config/brand';
import {
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface TripEnquiryFormProps {
  initialPackage?: string;
  initialDestination?: string;
}

export const TripEnquiryForm: React.FC<TripEnquiryFormProps> = ({
  initialPackage,
  initialDestination
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<TripEnquiryData>({
    name: '',
    phone: '',
    tripType: 'Friends Gang Expedition',
    travellerCount: '4 to 6 Persons',
    duration: '2 Days / 1 Night',
    travelDate: '',
    destinations: initialDestination ? [initialDestination] : ['Banasura Sagar Dam', 'Chembra Peak & Heart Lake'],
    specialRequests: initialPackage ? `Interested in package: ${initialPackage}` : '',
    preferredContact: '6238813608'
  });

  const tripStyles = [
    { id: 'Friends Gang Expedition', label: 'Friends Gang', sub: 'High energy road trip' },
    { id: 'Family Holiday', label: 'Family Getaway', sub: 'Comfortable & relaxed' },
    { id: 'Couple & Romantic Reset', label: 'Couple Journey', sub: 'Misty & peaceful' },
    { id: 'Solo & Adventure Trek', label: 'Solo / Explorer', sub: 'Wild offbeat trails' }
  ];

  const travellerCounts = [
    '1 to 2 Persons',
    '3 to 5 Persons',
    '6 to 8 Persons',
    '9 to 12+ Persons'
  ];

  const durations = [
    '1 Day Sightseeing',
    '2 Days / 1 Night',
    '3 Days / 2 Nights',
    '4+ Days Extended'
  ];

  const spots = [
    'Banasura Sagar Dam',
    'Chembra Peak & Heart Lake',
    'Soochipara Waterfalls',
    'Edakkal Caves',
    'Kuruvadweep Bamboo Rafting',
    'Lakkidi & Churam Viewpoint',
    'Meppadi Tea Valleys'
  ];

  const toggleDestination = (s: string) => {
    setFormData((prev) => {
      const exists = prev.destinations.includes(s);
      return {
        ...prev,
        destinations: exists
          ? prev.destinations.filter((d) => d !== s)
          : [...prev.destinations, s]
      };
    });
  };

  const validateCurrentStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1 && !formData.tripType) errs.tripType = 'Please select a trip style';
    if (step === 2 && formData.destinations.length === 0) errs.destinations = 'Please select at least one sight';
    if (step === 3 && !formData.duration) errs.duration = 'Please choose a trip duration';
    if (step === 4) {
      if (!formData.name.trim()) errs.name = 'Please enter your name';
      if (!formData.phone.trim() || formData.phone.length < 8) {
        errs.phone = 'Please enter a valid phone or WhatsApp number';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateCurrentStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const sendWhatsApp = (number: '6238813608' | '8157845547') => {
    if (!validateCurrentStep(4)) return;
    setSubmitted(true);
    const url = buildWhatsAppUrl(number, formData);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const progressPercent = ((currentStep - 1) / 3) * 100;

  return (
    <section className="section section-planner" id="planner">
      <div className="container-narrow">
        <div className="section-header">
          <div className="badge-pill">
            <span className="dot" />
            <span>Interactive Trip Planner</span>
          </div>
          <h2 className="section-title">
            Plan Your Wayanad <em>Journey.</em>
          </h2>
          <p className="section-subtitle">
            Configure your custom road trip in 4 quick steps. We prepare your enquiry and connect you straight to our WhatsApp team for an instant quote.
          </p>
        </div>

        <div className="planner-box">
          {/* Progress Tracker */}
          <div className="step-indicator-row">
            <div className="step-track" />
            <div className="step-fill" style={{ width: `${progressPercent}%` }} />
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className={`step-badge-node ${
                  n === currentStep ? 'active' : n < currentStep ? 'done' : ''
                }`}
              >
                {n < currentStep ? '✓' : n}
              </div>
            ))}
          </div>

          {/* STEP 1 */}
          {currentStep === 1 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '0.35rem' }}>
                Who is traveling with you?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Select your travel style and group size.
              </p>

              <label className="form-label">Trip Style</label>
              <div className="tile-choice-grid">
                {tripStyles.map((t) => (
                  <div
                    key={t.id}
                    className={`tile-choice ${formData.tripType === t.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, tripType: t.id })}
                  >
                    <span className="tile-title">{t.label}</span>
                    <span className="tile-sub">{t.sub}</span>
                  </div>
                ))}
              </div>

              <label className="form-label" style={{ marginTop: '1.5rem' }}>Number of Travellers</label>
              <div className="tile-choice-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
                {travellerCounts.map((c) => (
                  <div
                    key={c}
                    className={`tile-choice ${formData.travellerCount === c ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, travellerCount: c })}
                  >
                    <span className="tile-title">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '0.35rem' }}>
                Where would you like to explore?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Select the sights on your bucket list.
              </p>

              <div className="dest-tag-grid">
                {spots.map((s) => {
                  const isChecked = formData.destinations.includes(s);
                  return (
                    <div
                      key={s}
                      className={`dest-tag-card ${isChecked ? 'selected' : ''}`}
                      onClick={() => toggleDestination(s)}
                    >
                      <div
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: isChecked ? 'none' : '1px solid var(--border-light)',
                          background: isChecked ? 'var(--color-terracotta)' : 'transparent',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.7rem'
                        }}
                      >
                        {isChecked && '✓'}
                      </div>
                      <span>{s}</span>
                    </div>
                  );
                })}
              </div>
              {errors.destinations && (
                <p style={{ color: '#d93025', fontSize: '0.8rem' }}>{errors.destinations}</p>
              )}
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '0.35rem' }}>
                Duration & Planned Timeframe
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                How many days do you have for Wayanad?
              </p>

              <label className="form-label">Duration</label>
              <div className="tile-choice-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
                {durations.map((d) => (
                  <div
                    key={d}
                    className={`tile-choice ${formData.duration === d ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, duration: d })}
                  >
                    <span className="tile-title">{d}</span>
                  </div>
                ))}
              </div>

              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label className="form-label" htmlFor="travel-dates">Planned Travel Dates (Optional)</label>
                <input
                  id="travel-dates"
                  type="text"
                  className="form-control"
                  placeholder="e.g. Next weekend, Mid-December, or 20th Nov"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="special-notes">Pickup Location or Notes (Optional)</label>
                <textarea
                  id="special-notes"
                  className="form-control"
                  style={{ minHeight: '90px', resize: 'vertical' }}
                  placeholder="e.g. Pickup from Calicut Railway Station, or camping tent stay..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-headline)', marginBottom: '0.35rem' }}>
                Review & Send on WhatsApp
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Enter your details to generate your prefilled enquiry directly on WhatsApp.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="user-name">Your Name *</label>
                  <input
                    id="user-name"
                    type="text"
                    className="form-control"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                  />
                  {errors.name && <span style={{ color: '#d93025', fontSize: '0.78rem' }}>{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="user-phone">Phone / WhatsApp Number *</label>
                  <input
                    id="user-phone"
                    type="tel"
                    className="form-control"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                  />
                  {errors.phone && <span style={{ color: '#d93025', fontSize: '0.78rem' }}>{errors.phone}</span>}
                </div>
              </div>

              {/* Review Overview */}
              <div style={{ background: 'var(--bg-surface-warm)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', marginBottom: '1.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-headline)', marginBottom: '0.65rem' }}>
                  Trip Summary
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.86rem' }}>
                  <div><strong>Style:</strong> {formData.tripType}</div>
                  <div><strong>Group:</strong> {formData.travellerCount}</div>
                  <div><strong>Duration:</strong> {formData.duration}</div>
                  <div><strong>Sights:</strong> {formData.destinations.join(', ')}</div>
                </div>
              </div>

              {/* Dual WhatsApp Buttons */}
              <label className="form-label">Select WhatsApp Desk to Send:</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => sendWhatsApp('6238813608')}
                  className="btn btn-whatsapp"
                  style={{ padding: '1rem', flexDirection: 'column', gap: '0.2rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <WhatsAppIcon variant="monochrome" size={19} />
                    <span>Desk 1 (+91 62388 13608)</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Primary Travel Desk</span>
                </button>

                <button
                  type="button"
                  onClick={() => sendWhatsApp('8157845547')}
                  className="btn btn-whatsapp"
                  style={{ padding: '1rem', flexDirection: 'column', gap: '0.2rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <WhatsAppIcon variant="monochrome" size={19} />
                    <span>Desk 2 (+91 81578 45547)</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Tour Coordinator</span>
                </button>
              </div>

              {submitted && (
                <p style={{ color: '#25d366', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>
                  ✓ WhatsApp opened! Our team will reply promptly with availability and quote.
                </p>
              )}
            </div>
          )}

          {/* Stepper Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
            {currentStep > 1 ? (
              <button onClick={prevStep} className="btn btn-outline btn-sm">
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 4 && (
              <button onClick={nextStep} className="btn btn-terracotta">
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
