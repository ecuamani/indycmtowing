import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070b12",
        steel: "#d9e2ef",
        rescue: {
          blue: "#0b66ff",
          navy: "#071b39",
          light: "#eaf3ff"
        }
      },
      boxShadow: {
        glow: "0 24px 70px rgba(11, 102, 255, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
