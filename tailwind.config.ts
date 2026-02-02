import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        akzidenz: ['AkzidenzGrotesk', 'Arial Black', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#111111',
      },
    },
  },
  plugins: [],
}
export default config

