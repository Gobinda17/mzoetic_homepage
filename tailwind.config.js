/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto Serif', 'serif'],
      },
      colors: {
        facebook: "#1877f2",
        insta: "#e1306c",
        twitter: "#14171a",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

