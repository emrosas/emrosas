/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: 'hsl(0,0,4)',
        'dark-2': 'hsl(0,0,6)',
        brand: '#D64A04',
        'brand-2': 'hsl(42, 100%, 90%)',
        light: '#F0F0FF',
        'light-2': '#999',
        'gradient-1': '#fb8556',
        'gradient-2': '#932c00'
      },
      fontFamily: {
        display: ['Neue-Regrade-Variable', 'sans-serif'],
        body: ['Satoshi-variable', 'sans-serif']
      },
      spacing: {
        page: 'var(--page-main)'
      },
      boxShadow: {
        highlight: '0px 0px 16px 0px hsla(20, 96%, 43%, 0.25)'
      },
      gridTemplateColumns: {
        main: 'auto 1fr'
      }
    }
  },
  plugins: []
}
