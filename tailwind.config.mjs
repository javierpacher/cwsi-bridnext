/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: [
    // ── WhatWeAre: accent gradients stored in JS objects ──
    'from-bn-green', 'to-bn-green',
    'from-bn-teal',  'to-bn-teal',
    'from-bn-teal-light', 'to-bn-teal-light',
    'from-bn-lime',  'to-bn-lime',
    'from-bn-navy',  'to-bn-navy',
    'bg-gradient-to-br', 'bg-gradient-to-r',

    // ── Roadmap: phase colors stored in TS data objects ──
    // Phase 3 — blue
    'from-blue-700', 'to-blue-500',
    'bg-blue-50', 'border-blue-200', 'bg-blue-600', 'border-blue-500',
    // Phase 4 — purple
    'from-purple-700', 'to-purple-500',
    'bg-purple-50', 'border-purple-200', 'bg-purple-600', 'border-purple-500',
    // Phase 5 — indigo/blue
    'from-indigo-600', 'to-blue-400',
    'bg-indigo-50', 'border-indigo-200', 'bg-indigo-500', 'border-indigo-400',
    // Completed phases badge
    'bg-green-600', 'border-green-500',

    // ── Pricing: dynamic conditional classes ──
    'scale-[1.02]',
    'shadow-bn-teal/15',
    'bg-bn-teal/15',
    'bg-bn-navy/8', 'hover:bg-bn-navy/14',
    'border-bn-navy/12',
    'border-bn-teal/25',

    // ── WhatWeAre: bottom accent line on hover ──
    { pattern: /^scale-x-(0|100)$/ },
  ],
  theme: {
    extend: {
      colors: {
        'bn-navy':      '#212F3A',
        'bn-navy-light':'#2C3E4C',
        'bn-teal':      '#599E9F',
        'bn-teal-light':'#73B9BA',
        'bn-green':     '#4ade80',
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
