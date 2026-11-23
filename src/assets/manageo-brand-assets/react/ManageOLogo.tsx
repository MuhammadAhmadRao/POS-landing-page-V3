import React from 'react';

export interface ManageOLogoProps {
  /**
   * Theme variant:
   * - 'primary': Dark text for daylight/white backgrounds (default)
   * - 'dark': White text and cyan cart for dark/navy backgrounds
   * - 'symbol': Just the speed shopping cart icon
   * - 'monochrome': Solid black (or white in dark) for thermal receipts/stamps
   */
  variant?: 'primary' | 'dark' | 'symbol' | 'monochrome';
  /**
   * Height in pixels (number) or pre-set size string:
   * - 'sm': 24px
   * - 'md': 36px (default)
   * - 'lg': 48px
   * - 'xl': 60px
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * Whether to display the [ POS ] pill badge on the right (default: true)
   */
  showBadge?: boolean;
  /**
   * Optional custom CSS class name for the wrapper
   */
  className?: string;
}

export const ManageOLogo: React.FC<ManageOLogoProps> = ({
  variant = 'primary',
  size = 'md',
  showBadge = true,
  className = '',
}) => {
  const heightMap: Record<string, number> = { sm: 24, md: 36, lg: 48, xl: 60 };
  const pixelHeight = typeof size === 'number' ? size : heightMap[size] || 36;

  const isDark = variant === 'dark';
  const isMono = variant === 'monochrome';
  const textColor = isDark ? '#FFFFFF' : (isMono ? '#000000' : '#0F172A');
  const cartColor = isDark ? '#38BDF8' : (isMono ? textColor : '#0072F5');
  const badgeBg = isDark ? '#1E293B' : '#EEF4FF';
  const badgeText = isDark ? '#60A5FA' : '#1D4ED8';

  // Standalone Symbol
  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 80 64"
        height={pixelHeight}
        width={(pixelHeight / 64) * 80}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="ManageO Cart Symbol"
      >
        <path d="M 6 22 L 20 22" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 2 31 L 24 31" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 10 40 L 20 40" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
        <path
          d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
          stroke={cartColor}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="42" cy="53" r="4.5" fill={cartColor} />
        <circle cx="61" cy="53" r="4.5" fill={cartColor} />
      </svg>
    );
  }

  // Full Master Logo
  const fullWidth = showBadge ? 370 : 305;
  const calculatedWidth = (pixelHeight / 64) * fullWidth;

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}
    >
      <svg
        viewBox={`0 0 ${fullWidth} 64`}
        height={pixelHeight}
        width={calculatedWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ManageO POS Logo"
      >
        <defs>
          <linearGradient id={`manageOGrad_${variant}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0062FF" />
            <stop offset="50%" stopColor="#008CFF" />
            <stop offset="100%" stopColor="#00D5FF" />
          </linearGradient>
        </defs>

        {/* Speed Cart */}
        <g transform="translate(4, 6) scale(0.82)">
          <path d="M 6 22 L 20 22" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 2 31 L 24 31" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 10 40 L 20 40" stroke={cartColor} strokeWidth="4.5" strokeLinecap="round" />
          <path
            d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
            stroke={cartColor}
            strokeWidth="5.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="42" cy="53" r="4.5" fill={cartColor} />
          <circle cx="61" cy="53" r="4.5" fill={cartColor} />
        </g>

        {/* Wordmark */}
        <text
          x="84"
          y="44"
          fill={textColor}
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontSize="44"
          fontWeight="800"
          letterSpacing="-1.2px"
        >
          Manage
        </text>

        {/* Circular Gradient Ring O */}
        <circle
          cx="269"
          cy="28.5"
          r="14.5"
          fill="none"
          stroke={`url(#manageOGrad_${variant})`}
          strokeWidth="7.8"
        />

        {/* Pill Badge [ POS ] */}
        {showBadge && (
          <g transform="translate(304, 18)">
            <rect
              width="52"
              height="24"
              rx="7"
              fill={badgeBg}
              stroke={isDark ? '#334155' : 'transparent'}
              strokeWidth="1"
            />
            <text
              x="26"
              y="17"
              fill={badgeText}
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="12.5"
              fontWeight="800"
              letterSpacing="0.5px"
              textAnchor="middle"
            >
              POS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default ManageOLogo;