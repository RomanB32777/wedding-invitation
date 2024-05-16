const alternativeFonts = ["Arial", "sans-serif"];

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#8a9765",
				},
				secondary: "#dc8982",
			},
			fontFamily: {
				oranienbaum: ['"Oranienbaum"', ...alternativeFonts],
				roboto: ['"Roboto Condensed"', ...alternativeFonts],
				caravan: ['"Caravan"', ...alternativeFonts],
			},
		},
	},
	plugins: [],
};
