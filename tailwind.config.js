/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f74b7',
        secondary: '#9d77d2',
        tertiary: '#97f4f6'
      }
    }
  },
  plugins: []
}
