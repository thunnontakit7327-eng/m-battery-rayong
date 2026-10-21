import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FACC15",
          hover: "#EAB308",
          dark: "#CA8A04",
        },
        dark: {
          DEFAULT: "#111827",
          card: "#1F2937",
          light: "#374151",
        },
      },
      fontFamily: {
        sans: ["var(--font-prompt)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;