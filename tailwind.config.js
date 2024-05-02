/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green1': '#5BBA6F',
      'yellow': '#BAFF29',
      'green3': '#2A9134',
      'green4': '#137547',
      'green5': '#054A29',
      'offwhitebg': '#f2f2f2',
      'blue1': '#bfdbfe',
      'blue2': '#1e40af',
      'blue3': '#164e63'
    },
    fontFamily: {
      'shoulders': '"Big Shoulders Display"',
      'lexend': '"Lexend Deca"'
    }
  },
  plugins: [],
}