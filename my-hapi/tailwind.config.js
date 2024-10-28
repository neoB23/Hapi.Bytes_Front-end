/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF6000', // Add your custom color here
        blue: '#2A2273', // Add your custom color here
        footer: '#131313',
        back: '#BAB9B9',
      }
    },
  },
  plugins: [],
}

