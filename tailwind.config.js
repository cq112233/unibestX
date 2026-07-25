const darkMode = [
  'variant',
  [
    '&.theme-dark',
    '.theme-dark &',
  ],
]

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './App.uvue',
    './src/pages/**/*.{uts,uvue}',
    './src/components/**/*.{uts,uvue}',
    './stores/**/*.{uts,uvue}',
    '!./uni_modules/**/*',
    '!./unpackage/**/*',
  ],
  darkMode,
  theme: {
    extend: {
      colors: {
        primary: 'var(--theme-color, #0957DE)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
    container: false,
  },
}
