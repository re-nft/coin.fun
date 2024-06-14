import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  plugins: [
    forms,
    plugin(({ addComponents, theme }) => {
      const colors = theme('colors.brand');
      if (!colors) return;
      addComponents(
        Object.keys(colors).map((name) => ({
          [`.text-glow-${name}`]: {
            textShadow: `
            0 0 5px hsl(var(--color-${name})),
            0 0 10px hsl(var(--color-${name})),
            0 0 15px hsl(var(--color-${name})),
            0 0 20px hsl(var(--color-${name})),
            0 0 25px hsl(var(--color-${name})),
            0 0 30px hsl(var(--color-${name})),
            0 0 35px hsl(var(--color-${name}));
          `
          }
        }))
      );
    })
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
      animation: {
        nutty: 'nutty 300ms ease-in-out infinite',
        wiggle: 'wiggle 300ms ease-in-out infinite'
      },
      keyframes: {
        nutty: {
          '0%, 100%': { transform: 'rotate(-10deg) scale(1)' },
          '25%, 75%': {
            backgroundColor: 'hsl(var(--color-yellow))',
            transform: 'scale(1.25)'
          },
          '50%': {
            backgroundColor: 'hsl(var(--color-green-light))',
            transform: 'rotate(10deg) scale(1)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' }
        }
      },
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
        },
        brand: {
          'beige': 'hsl(var(--color-beige) / <alpha-value>)',
          'black': 'hsl(var(--color-black) / <alpha-value>)',
          'brown': 'hsl(var(--color-brown) / <alpha-value>)',
          'green-light': 'hsl(var(--color-green-light) / <alpha-value>)',
          'green': 'hsl(var(--color-green) / <alpha-value>)',
          'orange': 'hsl(var(--color-orange) / <alpha-value>)',
          'red': 'hsl(var(--color-red) / <alpha-value>)',
          'yellow': 'hsl(var(--color-yellow) / <alpha-value>)'
        }
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'calc(var(--radius) * 2)',
        md: 'calc(var(--radius) * 1.25)',
        sm: 'calc(var(--radius) * 0.75)',
        xl: 'calc(var(--radius) * 3.25)',
        xs: 'calc(var(--radius) * 0.5)'
      },
      fontFamily: {
        mono: ['var(--font-mono)', ...fontFamily.mono],
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif]
      }
    }
  }
};

export default config;
