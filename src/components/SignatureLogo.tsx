import React from 'react';

interface SignatureLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export function SignatureLogo({ className = '', width = 140, height = 'auto', color = 'currentColor' }: SignatureLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 90"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="xBraan1"
      role="img"
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* x - elegant cross */}
        <path d="M 15 28 C 20 32, 28 48, 38 58" opacity="0.95" />
        <path d="M 38 28 C 32 38, 22 52, 15 58" opacity="0.95" />
        
        {/* B - flowing script B */}
        <path d="M 50 20 C 50 35, 50 50, 50 65" strokeWidth="2.2" />
        <path d="M 50 20 C 60 18, 72 20, 72 30 C 72 38, 62 42, 50 42" />
        <path d="M 50 42 C 62 42, 78 44, 78 54 C 78 64, 64 68, 50 65" />
        
        {/* r - elegant r with flourish */}
        <path d="M 88 35 C 88 45, 88 55, 88 65" />
        <path d="M 88 42 C 92 36, 98 34, 104 36" />
        
        {/* a - script a */}
        <path d="M 110 52 C 108 42, 114 34, 122 34 C 130 34, 134 42, 134 50 C 134 58, 130 65, 122 65 C 116 65, 112 60, 110 55" />
        <path d="M 134 38 C 134 48, 134 58, 134 65" />
        
        {/* a - second a */}
        <path d="M 142 52 C 140 42, 146 34, 154 34 C 162 34, 166 42, 166 50 C 166 58, 162 65, 154 65 C 148 65, 144 60, 142 55" />
        <path d="M 166 38 C 166 48, 166 58, 166 65" />
        
        {/* n - flowing n */}
        <path d="M 176 38 C 176 48, 176 58, 176 65" />
        <path d="M 176 42 C 180 36, 188 34, 194 38 C 198 42, 198 55, 198 65" />
        
        {/* 1 - elegant numeral 1 with serif */}
        <path d="M 218 22 C 220 20, 224 22, 224 26 C 224 40, 224 52, 224 65" strokeWidth="2.4" />
        <path d="M 214 65 L 234 65" strokeWidth="1.8" />
        
        {/* Decorative underline flourish */}
        <path d="M 15 72 C 60 70, 140 68, 234 72" strokeWidth="0.8" opacity="0.4" />
      </g>
    </svg>
  );
}
