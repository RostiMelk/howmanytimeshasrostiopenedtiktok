module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.js',
    ],
    options: {
      safelist: ['bg-green-100','bg-red-100','bg-yellow-100','text-green-600','text-red-600','text-yellow-600'],
      blocklist: [/^debug-/],
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
