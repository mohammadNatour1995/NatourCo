export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="12.5" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="20" cy="20" rx="5.4" ry="12.5" stroke="currentColor" strokeWidth="1.3" />
      <line x1="7.5" y1="20" x2="32.5" y2="20" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9.5 11 A 14.8 14.8 0 0 1 30.5 9"
        stroke="#eba52e"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="30.5" cy="9" r="2.1" fill="#eba52e" />
    </svg>
  );
}
