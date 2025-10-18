// lib/icon-shim.tsx
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number | string };
const Base = ({ size = 24, width, height, ...rest }: IconProps) => (
  <svg
    width={width ?? size}
    height={height ?? size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  />
);

// ——— Экспортируй ТОЛЬКО то, что реально используется в проекте ———
// (можно добавить ещё в любой момент)

// ArrowRight
export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </Base>
);

// Sprout
export const Sprout = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 22v-8" />
    <path d="M7.5 9C9 9 11 8 12 6c-3 0-4.5 1-6.5 1a3.5 3.5 0 0 0 2 2z" />
    <path d="M16.5 11c-1.5 0-3.5-1-4.5-3 3 0 4.5 1 6.5 1a3.5 3.5 0 0 1-2 2z" />
  </Base>
);

// Factory
export const Factory = (p: IconProps) => (
  <Base {...p}>
    <path d="M2 20h20" />
    <rect x="4" y="10" width="16" height="10" rx="1" />
    <path d="M8 10V7l4 3V7l4 3" />
    <rect x="7" y="14" width="2" height="2" />
    <rect x="11" y="14" width="2" height="2" />
    <rect x="15" y="14" width="2" height="2" />
  </Base>
);

// Users2
export const Users2 = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="7" r="3" />
    <path d="M2 21a7 7 0 0 1 14 0" />
    <path d="M17 11a3 3 0 1 0 0-6" />
    <path d="M22 21a6 6 0 0 0-7-6" />
  </Base>
);

// Library
export const Library = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="4" width="4" height="16" rx="1" />
    <rect x="9" y="4" width="4" height="16" rx="1" />
    <path d="M20 20h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" />
  </Base>
);

// Handshake
export const Handshake = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 14l4 4a3 3 0 0 0 4.2-.2L16 14" />
    <path d="M20 10l-4-4-6 6" />
    <path d="M2 12l4-4 4 4" />
    <path d="M14 8l4 4" />
  </Base>
);

// Mail
export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Base>
);

// Linkedin
export const Linkedin = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <rect x="7" y="10" width="2" height="7" />
    <circle cx="8" cy="7" r="1" />
    <path d="M12 17v-4a2 2 0 1 1 4 0v4" />
    <line x1="12" y1="15" x2="16" y2="15" />
  </Base>
);

// Globe
export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20 15.3 15.3 0 0 0 0-20z" />
  </Base>
);

// default export на случай импорта по умолчанию
const Lucide = {};
export default Lucide;
