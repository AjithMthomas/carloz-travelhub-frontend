import React from 'react';

export interface WhatsAppIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  variant?: 'original' | 'monochrome' | 'green';
  title?: string;
}

/**
 * Authentic, official WhatsApp Brand Icon component.
 * - 'original': Full-color official WhatsApp badge with #25D366 green background circle and white handset.
 * - 'monochrome': Vector icon adopting `color` or `currentColor` (ideal inside colored buttons like .btn-whatsapp).
 * - 'green': Pure vector icon in official WhatsApp brand green (#25D366).
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  size = 20,
  className = '',
  style = {},
  color,
  variant = 'monochrome',
  title = 'WhatsApp'
}) => {
  if (variant === 'original') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`wa-icon wa-icon-original ${className}`.trim()}
        style={{ verticalAlign: 'middle', flexShrink: 0, display: 'inline-block', ...style }}
        aria-hidden="true"
      >
        <title>{title}</title>
        {/* Official WhatsApp Green Circular Bubble with subtle gradient */}
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        {/* Inner Speech Contour & Phone Receiver in Crisp White */}
        <path
          d="M16.01 6C10.48 6 6 10.48 6 16c0 1.95.56 3.77 1.53 5.32L6.5 25.5l4.31-1.01c1.48.86 3.2 1.35 5.2 1.35 5.52 0 10-4.48 10-10S21.53 6 16.01 6zm5.83 14.17c-.24.68-1.4 1.3-2.07 1.38-.6.07-1.37.1-2.2-.17-.5-.16-1.15-.37-1.98-.73-3.48-1.5-5.75-5.02-5.93-5.25-.17-.23-1.41-1.88-1.41-3.58 0-1.7 1.21-2.54 1.44-2.83.24-.29.53-.36.71-.36.18 0 .36 0 .52.01.17.01.4.06.6.53.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.31.31-.13.62.18.31.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.49 1.53.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.16.52.24.6.37.08.13.08.76-.16 1.44z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  const fillColor = variant === 'green' ? '#25D366' : (color || 'currentColor');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={`wa-icon wa-icon-${variant} ${className}`.trim()}
      style={{ verticalAlign: 'middle', flexShrink: 0, display: 'inline-block', ...style }}
      aria-hidden="true"
    >
      <title>{title}</title>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43z" />
    </svg>
  );
};
