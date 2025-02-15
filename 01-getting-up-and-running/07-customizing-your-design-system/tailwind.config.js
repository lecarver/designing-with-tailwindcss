module.exports = {
  theme: {
    extend: { //must include 'extend'  to not overwrite existing tailwind
      colors: {
        'brand-blue': '#1992d4',
      },
      spacing: {
        '72': '18rem',
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: []
}
