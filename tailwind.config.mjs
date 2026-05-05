/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bn-navy':      '#212F3A',
        'bn-navy-light':'#2C3E4C',
        'bn-teal':      '#599E9F',
        'bn-teal-light':'#73B9BA',
        'bn-lime':      '#E1FC80',
        'bn-gray':      '#f1f5f9',
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        brand: ['Corbel', 'Trebuchet MS', 'Gill Sans MT', 'Gill Sans', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'float':   'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
