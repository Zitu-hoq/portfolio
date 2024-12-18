/** @type {import('tailwindcss').Config} */



module.exports= {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)']
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217 
      },
      keyframes:{
        "move" : {
          "0":{ transform: "translateX(0%)" },
          "100":{ transform: "translateX(-50%)"},
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'move-left': 'move 1s linear infinite',
      },
    },
  },
  plugins: [],
};
