module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '340px',
      md: '640px',
      // => @media (min-width: 640px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      padding: {
        default: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    plugins: [],
  }
}