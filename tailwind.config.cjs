/** @type {import('tailwindcss').Config} */
module.exports= {

  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    

    
  }
  ,
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],
  darkMode:"class"
}