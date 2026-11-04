/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['Montserrat', 'sans-serif'],
      },
      colors: {
        paper: {
          50: '#ffffff',
          100: '#fafafc',
          200: '#f4f5f8',
          300: '#e5e7eb',
        },
        ink: {
          950: '#090d16',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
        },
        navy: {
          950: '#081325',
          900: '#0c2340',
          800: '#103055',
          700: '#17406f',
        },
        amber: {
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
        },
      },
    },
  },
  plugins: [],
}
