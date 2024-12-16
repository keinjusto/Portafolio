/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "45rem",
        101:"55rem",
      },
      height: {
        98: "35rem",
        99: "45rem",
        100: "58rem",
        
      },
      rotate: {
        30: '27deg',
      },
    },
  },
  plugins: [],
};
