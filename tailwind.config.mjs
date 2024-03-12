/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-1': 'hsl(240, 24%, 8%)',
				'dark-2': 'hsl(42, 6%, 31%)',
				'brand-1': 'hsl(240, 70%, 64%)',
				'brand-2': 'hsl(240, 60%, 44%)',
				'light-1': 'hsl(240, 50%, 98%)',
				'light-2': 'hsl(240, 8%, 75%)'
			},
			fontFamily: {
				display: ['Neue-Regrade-Variable', 'sans-serif'],
				body: ['Satoshi-Variable', 'sans-serif']
			},
			spacing: {
				page: 'var(--page-main)'
			}
		}
	},
	plugins: []
}
