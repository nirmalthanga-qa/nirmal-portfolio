export default function CodeIllustration() {
  return (
    <svg
      viewBox="0 0 600 420"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      role="img"
      aria-labelledby="code-art-title code-art-description"
    >
      <title id="code-art-title">
        Quality engineering through code
      </title>

      <desc id="code-art-description">
        A code editor showing a Playwright test, with a successful
        test result and an orange quality engineering badge.
      </desc>

      {/* Decorative background grid */}
      <defs>
        <pattern
          id="code-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#414952"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>

      <rect
        width="600"
        height="420"
        rx="20"
        fill="url(#code-grid)"
        opacity="0.45"
      />

      {/* Editor shadow */}
      <rect
        x="36"
        y="66"
        width="542"
        height="300"
        rx="12"
        fill="#14181D"
      />

      {/* Code editor */}
      <rect
        x="24"
        y="52"
        width="542"
        height="300"
        rx="12"
        fill="#252B32"
        stroke="#49525C"
      />

      <path d="M24 100H566" stroke="#414952" />

      {/* Window controls */}
      <circle cx="46" cy="76" r="5" fill="#F45520" />
      <circle cx="64" cy="76" r="5" fill="#E9BF6B" />
      <circle cx="82" cy="76" r="5" fill="#82B38C" />

      <text
        x="112"
        y="81"
        fill="#B6BBC2"
        fontSize="12"
        fontFamily="monospace"
      >
        quality.spec.ts
      </text>

      <text
        x="538"
        y="81"
        textAnchor="end"
        fill="#9AA4AE"
        fontSize="10"
        fontFamily="monospace"
      >
        TYPESCRIPT
      </text>

      {/* Line numbers */}
      <g
        fill="#74808C"
        fontSize="13"
        fontFamily="monospace"
      >
        <text x="43" y="139">01</text>
        <text x="43" y="168">02</text>
        <text x="43" y="197">03</text>
        <text x="43" y="226">04</text>
        <text x="43" y="255">05</text>
        <text x="43" y="284">06</text>
      </g>

      {/* Code */}
      <g fontSize="13" fontFamily="monospace">
        <text x="78" y="139" fill="#9AA4AE">
          {"// Confidence in every release"}
        </text>

        <text x="78" y="168" fill="#E2E5E9">
          <tspan fill="#FF946B">test</tspan>
          <tspan>{"('portfolio works', "}</tspan>
          <tspan fill="#C5A2DE">async</tspan>
          <tspan>{" ({ page }) => {"}</tspan>
        </text>

        <text x="94" y="197" fill="#E2E5E9">
          <tspan fill="#C5A2DE">await</tspan>
          <tspan>{" page.goto("}</tspan>
          <tspan fill="#B4CD94">{"'/'"}</tspan>
          <tspan>{");"}</tspan>
        </text>

        <text x="94" y="226" fill="#E2E5E9">
          <tspan fill="#C5A2DE">const</tspan>
          <tspan>{" title = page.locator("}</tspan>
          <tspan fill="#B4CD94">{"'h1'"}</tspan>
          <tspan>{");"}</tspan>
        </text>

        <text x="94" y="255" fill="#E2E5E9">
          <tspan fill="#C5A2DE">await</tspan>
          <tspan>{" expect(title).toBeVisible();"}</tspan>
        </text>

        <text x="78" y="284" fill="#E2E5E9">
          {"});"}
        </text>
      </g>

      {/* Illustrative test result */}
      <path d="M24 309H566" stroke="#414952" />
      <circle cx="46" cy="330" r="4" fill="#82B38C" />

      <text
        x="60"
        y="335"
        fill="#B4CD94"
        fontSize="12"
        fontFamily="monospace"
      >
        1 passed
      </text>

      <text
        x="542"
        y="335"
        textAnchor="end"
        fill="#9AA4AE"
        fontSize="11"
        fontFamily="monospace"
      >
        UI · API · AUTOMATION
      </text>

      {/* Bottom badge */}
      <rect
        x="91"
        y="370"
        width="420"
        height="42"
        rx="6"
        fill="#F45520"
      />

      <text
        x="301"
        y="396"
        textAnchor="middle"
        fill="#111827"
        fontSize="14"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        Quality engineered. Confidence delivered.
      </text>
    </svg>
  );
}