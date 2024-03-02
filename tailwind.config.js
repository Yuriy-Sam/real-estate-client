/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-color': 'var(--primary-color)',
				'secondary-color': 'var(--secondary-color)',
				'gray-color': 'var(--gray-color)',
				'light-color': 'var(--light-color)',
				'dark-color': 'var(--dark-color)'
			}
		}
	},
	plugins: []
};
