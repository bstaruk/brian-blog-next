/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
