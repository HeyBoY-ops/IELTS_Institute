// tailwind.config.cjs
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f1724', // deep navy for headings
        brand: {
          DEFAULT: '#1e6fff', // main blue
          light: '#eaf2ff',
          dark: '#1555cc',
        },
        accent: '#ffd166',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1e6fff 0%, #6fa8ff 100%)',
      },
    },
  },
  plugins: [],
};
