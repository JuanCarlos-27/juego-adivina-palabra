/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-purple-dark': '#7429C6',
				'custom-pink': '#C951E7',
				'custom-gray': '#4A5567',
				'custom-white': '#F2F5F9',
				'custom-dark': '#030616'
			}
		},
	},
	plugins: [],
}
