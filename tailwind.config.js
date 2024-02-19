/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sens-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        // Using modern `rgb`
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}

