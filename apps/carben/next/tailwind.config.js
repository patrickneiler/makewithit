const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: 
    {
      colors: {
        slate: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A2A2A8',
          500: '#6E6E76',
          600: '#52525A',
          700: '#3F3F45',
          800: '#2E2E33',
          900: '#1D1D20',
        },
        teal: {
          50: '#F4FFFD',
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#3ABAB4',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        indigo: {
          50: '#F8FBFF',
          100: '#EBF4FF',
          200: '#C3DAFE',
          300: '#A3BFFA',
          400: '#7F9CF5',
          500: '#667EEA',
          600: '#5A67D8',
          700: '#4C51BF',
          800: '#34399B',
          900: '#1E2156',
        },
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D8FD',
          300: '#D6BCFA',
          400: '#B794F4',
          500: '#9F7AEA',
          600: '#805AD5',
          700: '#6B46C1',
          800: '#553C9A',
          900: '#44337A',
        },
        pink: {
          50: '#FFF5F7',
          100: '#FFEBEF',
          200: '#FED7E2',
          300: '#FBB6CE',
          400: '#F687B3',
          500: '#ED64A6',
          600: '#D53F8C',
          700: '#B83280',
          800: '#97266D',
          900: '#702459',
        },
      },
      boxShadow: {
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.01)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
      },
      outline: {
        blue: '2px solid rgba(0, 112, 244, 0.5)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // add custom variant for expanding sidebar
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),    
  ],
};
