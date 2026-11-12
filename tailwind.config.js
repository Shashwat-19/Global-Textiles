/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Bricolage Grotesque"',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          '"Bricolage Grotesque"',
          '"SF Pro Display"',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      colors: {
        stone: {
          50: '#faf6ee',
          100: '#f4ede0',
          200: '#e9dfcc',
          300: '#d9cbb2',
          400: '#b3a58c',
          500: '#8a7d68',
          600: '#6b5f4d',
          700: '#514839',
          800: '#3a3329',
          900: '#2a251e',
          950: '#1d1913',
        }
      }
    },
  },
  plugins: [],
}
