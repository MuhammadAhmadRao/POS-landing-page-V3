import React from 'react';

export function CartIcon({ className = "w-8 h-8", color = "gradient" }) {
  const gradientId = React.useId();
  const trailId = React.useId();

  return (
    <svg 
      className={className} 
      viewBox="0 0 500 320" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="60%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id={trailId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Speed Trails */}
      <rect x="55" y="110" width="100" height="26" rx="13" fill={color === "white" ? "#ffffff" : `url(#${trailId})`} opacity={color === "white" ? 0.7 : 1} />
      <rect x="85" y="155" width="85" height="26" rx="13" fill={color === "white" ? "#ffffff" : `url(#${trailId})`} opacity={color === "white" ? 0.7 : 1} />
      <rect x="125" y="200" width="60" height="26" rx="13" fill={color === "white" ? "#ffffff" : `url(#${trailId})`} opacity={color === "white" ? 0.7 : 1} />

      {/* Cart Frame & Handle */}
      <path 
        d="M 90 48 
           L 170 48 
           C 177 48 184 53 189 60 
           L 240 152 
           L 368 152 
           C 378 152 386 145 390 135 
           L 412 72 
           C 415 64 423 58 433 58 
           L 438 58 
           C 450 58 458 70 453 81 
           L 410 197 
           C 403 216 385 229 364 229 
           L 213 229 
           C 195 229 179 218 172 202 
           L 123 74 
           L 90 74 
           C 83 74 77 68 77 61 
           C 77 54 83 48 90 48 Z" 
        fill={color === "white" ? "#ffffff" : (color === "blue" ? "#2563eb" : `url(#${gradientId})`)} 
      />

      {/* Cart Basket Cutout */}
      <path 
        d="M 218 82 
           L 395 82 
           L 362 174 
           C 359 182 351 187 342 187 
           L 240 187 
           C 231 187 224 181 220 173 
           Z" 
        fill={color === "white" ? "#0f172a" : "#ffffff"} 
      />

      {/* Left Wheel */}
      <circle 
        cx="230" 
        cy="268" 
        r="27" 
        fill={color === "white" ? "#ffffff" : (color === "blue" ? "#2563eb" : `url(#${gradientId})`)} 
      />

      {/* Right Wheel */}
      <circle 
        cx="352" 
        cy="268" 
        r="27" 
        fill={color === "white" ? "#ffffff" : (color === "blue" ? "#2563eb" : `url(#${gradientId})`)} 
      />
    </svg>
  );
}

export default function Logo({ 
  variant = "horizontal", 
  theme = "dark", 
  size = "md",
  withTagline = false,
  className = "" 
}) {
  const sizeClasses = {
    sm: { icon: "w-7 h-7", text: "text-lg", sub: "text-[10px]" },
    md: { icon: "w-9 h-9", text: "text-2xl", sub: "text-xs" },
    lg: { icon: "w-11 h-11", text: "text-3xl", sub: "text-xs" },
    xl: { icon: "w-14 h-14", text: "text-4xl", sub: "text-sm" },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const textColor = theme === "light" ? "text-white" : "text-slate-900";
  const subColor = theme === "light" ? "text-slate-300" : "text-slate-500";
  const iconColor = theme === "light" ? "white" : "gradient";

  if (variant === "icon-only") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <CartIcon className={currentSize.icon} color={iconColor} />
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-2xl shadow-sm border border-blue-100 dark:border-slate-700">
          <CartIcon className={currentSize.icon} color="gradient" />
        </div>
        <div className="text-center">
          <span className={`font-black tracking-tight ${textColor} ${currentSize.text}`}>
            Manage<span className="text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">O</span>
          </span>
          {withTagline && (
            <p className={`font-medium uppercase tracking-widest ${subColor} ${currentSize.sub}`}>
              Cloud Point of Sale
            </p>
          )}
        </div>
      </div>
    );
  }

  // Default horizontal
  return (
    <div className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <CartIcon className={currentSize.icon} color={iconColor} />
      </div>
      <div className="flex flex-col leading-tight">
        <div className="flex items-center">
          <span className={`font-extrabold tracking-tight ${textColor} ${currentSize.text} font-sans`}>
            Manage<span className="text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">O</span>
          </span>
          <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-blue-100 text-blue-700 rounded-md">
            POS
          </span>
        </div>
        {withTagline && (
          <span className={`font-medium tracking-wide uppercase ${subColor} ${currentSize.sub}`}>
            Next-Gen Business OS
          </span>
        )}
      </div>
    </div>
  );
}

