/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg':       '#0d0f11',
        'surface':  '#151719',
        'border':   '#232629',
        'text':     '#e8e4dd',
        'muted':    '#7a7873',
        'accent':   '#c9a96e',
        'accent2':  '#3d6b8c',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
