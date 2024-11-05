/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      grey : "#F6F7F8" ,
      hover_color : "#01F0D0"  , 
      content_color : "#D8FCF7" , 
    } ,
    extend: {},
  },
  plugins: [],
}

