module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'mains': "url('/Desktop.jpg')",
      }),
      colors: {
        'hamza': '#0A192F',
        'hb15': '#151515',
        'text-w': '#FFFFFF',
        'text-gr1': '#faf7ff',
        'text-location': '#65fbd2',
        'text-location-hover': '#005a34'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
