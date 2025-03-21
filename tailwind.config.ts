import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx', './src/**/*.jsx', 'node_modules/@marvin/react-ai/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A5CAA',
        },
        secondary: {
          DEFAULT: '#6C9BD2',
        },
        'card': {
          DEFAULT: '#f8faff',
        },
        accent: {
          DEFAULT: '#FFC847',
        }
      }
    },
  },
  plugins: [],
} satisfies Config

