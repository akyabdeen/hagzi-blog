import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hagzi_blue: "#2e74bc",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        appearFromLeft: {
          '0%': {opacity: "1", transform: "translateX(-100%)"},
          '100%': {opacity: "1", transform: "translateX(0)"},
        }
      },
      animation: {
        appearFromLeft: "appearFromLeft 0.3s ease-in-out"
      }
    },
  },
  plugins: [],
} satisfies Config;
