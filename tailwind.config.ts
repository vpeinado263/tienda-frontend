/** @type {import('tailwindcss').Config} */
const contentConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-dark': 'radial-gradient(circle, #d83333, #000000)',
        'gradient-light': 'radial-gradient(circle, #d80505, #000000)',
      },
      screens: {
        'xs': '100px',
        'sm': '480px',
        'md': '768px',
        'lg': '769px',
      },
    },
  },
  plugins: [],
};

export default contentConfig;

