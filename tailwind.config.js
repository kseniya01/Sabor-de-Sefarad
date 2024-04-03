/** TAILWIND - Define customizations at the root of the project */
import('tailwindcss').Config
module.exports = {
    content: [
        './src/**/*.{html,js}'],
    theme: {
      colors: {
        'navy': '#112A46',
        'sky-blue': '#ACC8E5',
        'black': '#000000',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }