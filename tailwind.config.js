/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito Sans', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/airplane.jpg')",
      }
    },
  },
  plugins: [],
}
