import Image from "next/image";

export default function ProfilePortrait() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Decorative SVG frame */}
      <svg
        viewBox="0 0 400 460"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="225"
          r="175"
          stroke="#F45520"
          strokeOpacity="0.35"
        />

        <circle
          cx="200"
          cy="225"
          r="190"
          stroke="#F45520"
          strokeOpacity="0.2"
          strokeDasharray="6 12"
        />

        <path
          d="M35 115V45H105"
          stroke="#F45520"
          strokeWidth="3"
        />

        <path
          d="M295 415H365V345"
          stroke="#F45520"
          strokeWidth="3"
        />

        <circle cx="365" cy="95" r="7" fill="#F45520" />
        <circle cx="35" cy="360" r="5" fill="#F45520" />

        <text
          x="315"
          y="45"
          fill="#FF946B"
          fontFamily="monospace"
          fontSize="25"
        >
          {"</>"}
        </text>

        <text
          x="35"
          y="435"
          fill="#FF946B"
          fontFamily="monospace"
          fontSize="25"
        >
          {"{ }"}
        </text>
      </svg>

      {/* Photo */}
      <div className="relative px-10 py-16">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-2xl border"
          style={{
            borderColor: "#49525C",
            backgroundColor: "#252B32",
            boxShadow: "14px 14px 0 rgba(244, 85, 32, 0.12)",
          }}
        >
          <Image
            data-testid="profile-photo"
            src="/nirmal-profile.webp"
            alt="Nirmal Kumar"
            fill
            preload
            sizes="(max-width: 440px) 75vw, 304px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}