module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    '.src/components/**/*.{js,jsx,ts,tsx}',
    '.src/pages/**/*.{js,jsx,ts,tsx}',
    'src/styles/index.css'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
