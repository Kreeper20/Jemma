/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        scroll: 'scroll 25s linear infinite',
        'scroll-reverse': 'scroll-reverse 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      colors: {
        purple: {
          20:"#450065",
          30:"#DBBDFB"
        },
        orange:{
          20:'#f89500'
        },
      },
    },
  },
  plugins: [],
}
