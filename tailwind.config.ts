import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — matched to the Netto logo: vivid safety orange on charcoal.
        netto: {
          50: "#fff5ed",
          100: "#ffe8d4",
          200: "#ffcda8",
          300: "#ffa871",
          400: "#ff7f38",
          500: "#f26522", // brand orange
          600: "#e04a10",
          700: "#b93610",
          800: "#932e15",
          900: "#772914",
          950: "#401103",
        },
        steel: {
          50: "#f6f7f8",
          100: "#eceef1",
          200: "#d5dae0",
          300: "#b0bac4",
          400: "#8593a2",
          500: "#667585",
          600: "#515e6c",
          700: "#434d58",
          800: "#333a42",
          900: "#23282e",
          950: "#15181c", // near-black hero base
        },
        ink: {
          DEFAULT: "#15181c",
          soft: "#333a42",
          muted: "#667585",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,24,28,0.05), 0 10px 30px -14px rgba(21,24,28,0.35)",
        lift: "0 18px 50px -16px rgba(21,24,28,0.45)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.1rem",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
