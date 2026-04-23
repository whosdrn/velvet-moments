import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: '#0a0a0a',
        ivoire: '#faf8f5',
        or: '#c9a96e',
        'or-light': '#d4b483',
        rose: '#f0e6e6',
        'rose-dark': '#e8d0d0',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        lato: ['var(--font-lato)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
