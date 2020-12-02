module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    '.src/components/**/*.{ts,tsx}',
    '.src/pages/**/*.{ts,tsx}',
    '.src/styles/index.css',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
