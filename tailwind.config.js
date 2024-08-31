/** @type {import('tailwindcss').Config} */
import formPlugin from '@tailwindcss/forms';
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: colors.white,
			brand: {
				primary: colors.violet[500],
				secondary: colors.violet[300],
			},
			point: {
				primary: colors.emerald[500],
				secondary: colors.emerald[200],
			},
			neutral: {
				primary: colors.neutral[900],
				secondary: colors.neutral[500],
				tertiary: colors.neutral[300],
			},
			error: {
				primary: colors.red[500],
				secondary: colors.red[300],
			},
		},
	},
	plugins: [formPlugin],
};
