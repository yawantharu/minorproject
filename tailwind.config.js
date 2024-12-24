/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
            primary : "#704f38",
      secondary : "#745649",
      btnPrimary: "#eee5d8"
      }
    
    },
  },
  plugins: [],
}

