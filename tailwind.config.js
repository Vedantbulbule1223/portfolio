/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1D26',
          panel: '#102935',
          deep: '#081419',
        },
        line: {
          DEFAULT: '#2F5C6E',
          soft: '#1C3F4C',
        },
        paper: '#F3EFE6',
        bone: '#EDEAE3',
        copper: {
          DEFAULT: '#C9793F',
          bright: '#E08F4F',
        },
        muted: '#9FB3BD',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(47,92,110,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(47,92,110,0.16) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
