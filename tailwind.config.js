module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			primary: '#00BCE6',
			main: '#53525E',
			title: '#241f1f'
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
