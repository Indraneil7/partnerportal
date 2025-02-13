/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E8B57',
        'primary-hover': '#3CB371',
        'secondary': '#1E90FF',
        'dark-gray': '#333333',
        'light-gray': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

