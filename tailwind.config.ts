import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        eggshell: {
          400: '#fcfcfb',
          500: '#f2f0ec',
          600: '#e8e4dd',
          700: '#ddd8ce',
          800: '#d3ccbf',
        },
        eggplant: {
          200: '#625a7b',
          300: '#56506c',
          400: '#4b455e',
          500: '#3f3a4f',
          600: '#332f40',
          700: '#282432',
          800: '#1c1a23',
        },
      },
      fontFamily: {
        sans: ['var(--font-lato), sans'],
        serif: ['var(--font-merriweather), sans-serif'],
      },
      listStyleType: {
        circle: 'circle',
        roman: 'lower-roman',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
