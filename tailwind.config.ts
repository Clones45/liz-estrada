import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0A1628",
          800: "#0F1E3A",
          700: "#152647",
          600: "#1B2F57",
        },
        gold: {
          300: "#F0D980",
          400: "#E8C96A",
          500: "#C9A84C",
          600: "#A8882E",
        },
        teal: {
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          400: "#94A3B8",
          500: "#64748B",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0F1E3A 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
        "teal-gradient": "linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)",
        "card-glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-radial": "radial-gradient(ellipse at 60% 50%, rgba(20,184,166,0.08) 0%, transparent 70%)",
      },
      boxShadow: {
        gold: "0 0 30px rgba(201,168,76,0.2)",
        teal: "0 0 30px rgba(20,184,166,0.2)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        card: "0 20px 60px rgba(0,0,0,0.3)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "shimmer": "shimmer 2.5s infinite linear",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
