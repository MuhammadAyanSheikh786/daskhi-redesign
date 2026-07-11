export default function IslamicPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`w-96 h-96 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M200 0 L223 60 L288 50 L250 100 L300 130 L240 140 L240 200 L180 180 L160 240 L120 200 L80 240 L100 180 L40 160 L90 120 L50 60 L120 70 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        fill="none"
      />
      <circle
        cx="200"
        cy="200"
        r="140"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
      <circle
        cx="200"
        cy="200"
        r="100"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
      <circle
        cx="200"
        cy="200"
        r="60"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
      <path
        d="M200 60 A140 140 0 0 1 340 200"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
      <path
        d="M200 340 A140 140 0 0 1 60 200"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
      <path
        d="M160 40 L200 80 L240 40"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
      <path
        d="M160 360 L200 320 L240 360"
        stroke="currentColor"
        strokeWidth="0.4"
        fill="none"
      />
    </svg>
  );
}
