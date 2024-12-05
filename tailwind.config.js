/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}", './index.html'],
  theme: {
    extend: {
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      }, 
    },
    fontFamily: {
      nunito : ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}

