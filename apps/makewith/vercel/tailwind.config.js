const { fontFamily } = require('tailwindcss/defaultTheme')
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
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
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'slide-from-left': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-to-left': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'slide-from-left':
          'slide-from-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895)',
        'slide-to-left':
          'slide-to-left 0.25s cubic-bezier(0.82, 0.085, 0.395, 0.895)',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
