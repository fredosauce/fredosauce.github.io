module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'strong-sans': ['Futura', 'Helvetica', 'Arial', 'sans-serif'],
      'stats-sans': ['Arial', 'sans-serif'],
      'stat-serif': ['MonoLisa', 'serif'],
    },
    extend: {
      animation: {
        'scrollXFull-0': 'scrollXFull 6s linear infinite',
        'scrollXFull-1500': 'scrollXFull 6s linear 1500ms infinite',
        'scrollXFull-3000': 'scrollXFull 6s linear 3000ms infinite',
        'scrollXFull-4500': 'scrollXFull 6s linear 4500ms infinite',
      },
      keyframes: {
        scrollXFull: {
          '0%': { transform: 'translateX(-400px)', opacity: 1 },
          '98%': { transform: 'translateX(1200px)', opacity: 1 },
          '99%': { transform: 'translateX(1200px)', opacity: 0 },
          '100%': { transform: 'translateX(-400px)', opacity: 0 },
        },
      },
      transitionDelay: {
        1500: '1500ms',
        3000: '3000ms',
        4500: '4500ms',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      letterSpacing: ['hover'],
      fontStyle: ['hover'],
    },
  },
  plugins: [],
};
