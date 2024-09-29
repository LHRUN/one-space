import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  })
})

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "max-600": {"max": "600px"}
      },
      spacing: {
        "word-1": "0.25rem",
        "word-2": "0.5rem",
        "word-4": "1rem",
      },
      colors: {
        "theme-text": "var(--color)",
        "theme-background": "var(--background)"
      }
    },
  },
  plugins: [rotateY],
}
export default config
