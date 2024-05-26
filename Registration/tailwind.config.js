/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width: {
      '600': '600px',
      
    },},
    colors: {
      'Blue':' #003399',
      'White':' #f8fafc',
    },
  },
  plugins: [require("daisyui")],
}

