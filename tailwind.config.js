/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        obsidian: {
          950: "#09090b",
          900: "#0e1015",
          850: "#14171f",
          800: "#1a1e29",
        },
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(245, 158, 11, 0.35)",
        "glow-emerald": "0 0 40px -12px rgba(52, 211, 153, 0.3)",
        card: "0 20px 50px -24px rgba(0, 0, 0, 0.75)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
