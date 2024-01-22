/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
   
    extend: {
      fontFamily:{
        montsserat :["Montserrat", "sans-serif"],
        cinzel:['Cinzel Decorative', 'serif'],
        glacial:['Glacial Indifference', 'sans-serif']
      },
      colors:{
        'human':"#8EC74E"
      }
    },

    screens: {
      sm: "160px",
      // => @media (min-width: 640px) { ... }

      md: "549px",
      // => @media (min-width: 768px) { ... }

      lg: "880px",
      // => @media (min-width: 1024px) { ... }

      
    },
  },
  
  plugins: [],
}

