/** TAILWIND CUSTOMIZATION - Define customizations at the root of the project */
/** @type {import('tailwindcss').Config} */
export default __CONFIG__

/** CONFIG. TAILWIND TYPOGRAPHY - Add Tailwind Typography plugin */
/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      // ...
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
  }