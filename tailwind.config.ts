import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
    // require('daisyui'),
  ],
} satisfies Config
