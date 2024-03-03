/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': {
					DEFAULT: 'var(--secondary-color)',
					300: 'var(--secondary-color-300)',
					200: 'var(--secondary-color-200)'
				},
				'light-color': 'var(--light-color)',
				'dark-color': 'var(--dark-color)'
			}
		}
	},
	plugins: []
};
