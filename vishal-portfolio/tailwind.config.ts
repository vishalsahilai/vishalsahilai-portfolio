import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#36d01b',
        dark: '#0a0a0a',
        darkcard: '#111111',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '1100px',
      },
    },
  },
  plugins: [],
}
export default config