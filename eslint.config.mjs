import withNuxt from './.nuxt/eslint.config.mjs'
import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat()

export default withNuxt({}, ...compat.config({
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/migration-from-tailwind-2': 'off',
    'vue/html-self-closing': 'off',
  },
}))

// your custom flat configs go here, for example:
// {
//   files: ['**/*.ts', '**/*.tsx'],
//   rules: {
//     'no-console': 'off' // allow console.log in TypeScript files
//   }
// },
// {
//   ...
// }
