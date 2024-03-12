/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'l-cyan' : 'hsl(193, 38%, 86%)',
        'n-green' : 'hsl(150, 100%, 66%)',
        'g-blue' : 'hsl(217, 19%, 38%)',
        'd-g-blue' : 'hsl(217, 19%, 24%)',
        'd-blue' : 'hsl(218, 23%, 16%)',
      },
      fontFamily:
      {
        'manrope' : 'Manrope , sans-serif',
      },
      boxShadow: {
        'neon-green': '0 0px 50px 25px hsla(150, 100%, 66%, 0.25)', 
      },
    },
  },
  plugins: [],
}
