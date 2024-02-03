/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-1': 'hsl(0, 0%, 8%)',
				'dark-2': 'hsl(42, 6%, 31%)',
				'brand-1': 'hsl(40, 100%, 48%)',
				'brand-2': 'hsl(42, 100%, 90%)',
				'light-1': 'hsl(42, 100%, 98%)',
				'light-2': 'hsl(48, 8%, 75%)'
			},
			fontFamily: {
				display: ['Red Hat Display', 'sans-serif'],
				body: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
}
