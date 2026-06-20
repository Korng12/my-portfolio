/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      },
      colors: {
        background:'var(--background)',
        surface:'var(--color-surface)',
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          inverse: 'var(--text-inverse)',
          // accent: 'var(--text-accent)',
        },
        'color-border': 'var(--color-border)',
        blue: {
          500: 'var(--color-primary)',
          600: '#0066cc',
          400: '#0084ff',
        }
      },

      fontSize: {
        display: '4rem',
        h1: '3rem',
        h2: '2.5rem',
        h3: '2rem',
        body: '1.0625rem',
        caption: '0.875rem'
      }
    }
  },
  plugins: [],
}
