import React from 'react';

/**
 * Official ManageO POS Brand Logo Component
 * Derived directly from ManageO-Brand-Assets pack.
 *
 * Supports:
 * - variant: 'primary' (dark text for white/light bg) | 'dark' (white text for dark/navy bg) | 'symbol' | 'monochrome'
 * - theme: 'dark' (default light-surface text) | 'light' (white text on dark-surface)
 * - size: 'sm' (24px) | 'md' (36px) | 'lg' (48px) | 'xl' (60px) | number (height in px)
 * - showBadge / withTagline: boolean (displays [ POS ] badge on right, default true)
 */

export function CartIcon({ 
  className = "", 
  variant = "primary", 
  size = 32,
  color = null 
}) {
  const isDark = variant === 'dark';
  const cartColor = color || (isDark ? '#38BDF8' : '#0072F5');

  return (
    <svg
      viewBox="0 0 80 64"
      height={typeof size === 'number' ? size : 32}
      width={typeof size === 'number' ? (size / 64) * 80 : 40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ManageO Speed Cart"
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

export function ManageOLogo({
  variant = null,
  theme = null,
  size = 'md',
  showBadge = true,
  withTagline = null,
  className = ''
}) {
  const heightMap = { sm: 26, md: 36, lg: 48, xl: 60 };
  const pixelHeight = typeof size === 'number' ? size : (heightMap[size] || 36);

  // Map theme: in previous code theme="light" was used on dark surfaces (white text)
  const resolvedVariant = variant || (theme === 'light' ? 'dark' : 'primary');
  const isDark = resolvedVariant === 'dark';
  const isMono = resolvedVariant === 'monochrome';

  // Badge visibility: withTagline or showBadge
  const displayBadge = withTagline !== null ? withTagline : showBadge;

  const textColor = isDark ? '#FFFFFF' : (isMono ? '#000000' : '#0F172A');
  const cartColor = isDark ? '#38BDF8' : (isMono ? textColor : '#0072F5');
  const badgeBg = isDark ? '#1E293B' : '#EEF4FF';
  const badgeText = isDark ? '#60A5FA' : '#1D4ED8';

  // Unique gradient ID
  const gradId = React.useId().replace(/:/g, '_');

  // Standalone Symbol
  if (resolvedVariant === 'symbol') {
    return (
      <CartIcon 
        size={pixelHeight} 
        variant={resolvedVariant} 
        className={className} 
      />
    );
  }

  // Full Master Brand Logo
  const fullWidth = displayBadge ? 370 : 305;
  const calculatedWidth = (pixelHeight / 64) * fullWidth;

  return (
    <div
      className={`inline-flex items-center leading-none select-none transition-transform duration-200 ${className}`}
      style={{ lineHeight: 1 }}
    >
      <svg
        viewBox={`0 0 ${fullWidth} 64`}
        height={pixelHeight}
        width={calculatedWidth}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ManageO POS Official Brand Logo"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
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

        {/* Wordmark: Manage */}
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
          stroke={`url(#${gradId})`}
          strokeWidth="7.8"
        />

        {/* Pill Badge [ POS ] */}
        {displayBadge && (
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
}

export default ManageOLogo;
