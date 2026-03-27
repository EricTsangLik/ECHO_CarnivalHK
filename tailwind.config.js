/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f3',
          100: '#ffe0e7',
          200: '#ffc1cf',
          300: '#ff8da6',
          400: '#ff4770',
          500: '#ff2151',
          600: '#e01e47',
          700: '#c4183d',
          800: '#a31533',
          900: '#87142d',
          950: '#4a0715',
        },
        secondary: {
          50: '#fffaeb',
          100: '#fff0c6',
          200: '#ffe088',
          300: '#ffcb4a',
          400: '#ffae21',
          500: '#f99207',
          600: '#dd6d02',
          700: '#b74c06',
          800: '#943a0c',
          900: '#7a310d',
          950: '#461802',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
