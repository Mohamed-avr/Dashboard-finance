/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Components/Content/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
    },
    colors : {
      'navbar':'#1A1C22',
      'sidebar':'#1A1C22',
      'lightColor':'#A9A9A9',
      'selectedColor':'#1FCB4F',
      'body':'#282C35',
      'body-secound':'#282C35',
      
    }
    , fontFamily:{ 
      'poppins':['poppins']
    }
  },
  plugins: [],
}
