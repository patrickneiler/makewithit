const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#cecece",
          200: "#9d9d9d",
          300: "#6b6b6d",
          400: "#3a3a3c",
          500: "#09090b",
          600: "#070709",
          700: "#050507",
          800: "#040404",
          900: "#020202"
        },
        red: {
          100: '#ffd4e2',
          200: '#ffaac5',
          300: '#ff7fa7',
          400: '#ff558a',
          500: '#ff2a6d',
          600: '#cc2257',
          700: '#991941',
          800: '#66112c',
          900: '#330816',
        },
        teal: {
          100: '#ccf0fc',
          200: '#99e2fa',
          300: '#66d3f7',
          400: '#33c5f5',
          500: '#00b6f2',
          600: '#0092c2',
          700: '#006d91',
          800: '#004961',
          900: '#002430',
        },
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': [
          'var(--font-architects-daughter)',
          'sans-serif',
        ],
        'nycd': ['var(--font-nycd)', 'cursive'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        'md': '1.075rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        full: '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        10: '2.5rem',
      },
      scale: {
        98: '.98',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
