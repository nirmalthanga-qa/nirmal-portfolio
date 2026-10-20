export default function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 560 320"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Background rings */}
      <circle
        cx="280"
        cy="160"
        r="135"
        stroke="#414952"
        strokeDasharray="5 10"
      />

      <circle
        cx="280"
        cy="160"
        r="105"
        stroke="#F45520"
        strokeOpacity="0.2"
      />

      {/* Connection lines */}
      <path
        d="M105 85L200 135M455 85L360 135M105 245L200 190M455 245L360 190"
        stroke="#F45520"
        strokeWidth="2"
        strokeDasharray="5 7"
        strokeOpacity="0.6"
      />

      {/* Envelope shadow */}
      <rect
        x="180"
        y="111"
        width="220"
        height="140"
        rx="16"
        fill="#14181D"
      />

      {/* Envelope */}
      <rect
        x="170"
        y="100"
        width="220"
        height="140"
        rx="16"
        fill="#252B32"
        stroke="#F45520"
        strokeWidth="2"
      />

      <path
        d="M177 110L268 176Q280 185 292 176L383 110"
        stroke="#FF946B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M178 230L239 173M382 230L321 173"
        stroke="#49525C"
        strokeWidth="2"
      />

      {/* Code node */}
      <circle
        cx="100"
        cy="80"
        r="30"
        fill="#252B32"
        stroke="#49525C"
      />

      <path
        d="M91 71L82 80L91 89M109 71L118 80L109 89M104 67L96 93"
        stroke="#FF946B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Conversation node */}
      <circle
        cx="460"
        cy="80"
        r="30"
        fill="#252B32"
        stroke="#49525C"
      />

      <path
        d="M445 68H475V87H458L450 94V87H445Z"
        stroke="#FF946B"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M452 75H468M452 81H462"
        stroke="#B6BBC2"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Quality node */}
      <circle
        cx="100"
        cy="250"
        r="25"
        fill="#252B32"
        stroke="#49525C"
      />

      <path
        d="M89 250L97 258L112 242"
        stroke="#FF946B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Person node */}
      <circle
        cx="460"
        cy="250"
        r="25"
        fill="#252B32"
        stroke="#49525C"
      />

      <circle
        cx="460"
        cy="242"
        r="6"
        stroke="#FF946B"
        strokeWidth="2"
      />

      <path
        d="M448 263C448 249 472 249 472 263"
        stroke="#FF946B"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Decorative dots */}
      <circle cx="280" cy="25" r="4" fill="#F45520" />
      <circle cx="280" cy="295" r="4" fill="#F45520" />
      <circle cx="40" cy="160" r="3" fill="#74808C" />
      <circle cx="520" cy="160" r="3" fill="#74808C" />
    </svg>
  );
}