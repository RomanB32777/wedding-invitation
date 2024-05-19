import formsPlugin from "@tailwindcss/forms";
import animationDelayPlugin from "tailwindcss-animation-delay";

const alternativeFonts = ["Arial", "sans-serif"];

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				base: ["16px", "20px"],
			},
			divideWidth: {
				DEFAULT: "0.5px",
			},
			borderWidth: {
				DEFAULT: "0.5px",
			},
			width: {
				px: "0.5px",
			},
			colors: {
				primary: {
					DEFAULT: "#8a9765",
					dark: "#546444",
					light: "#a4a89f",
					lightest: "#d8e0bf",
				},
				secondary: "#dc8982",
				grey: "#eeebeb",
			},
			fontFamily: {
				oranienbaum: ['"Oranienbaum"', ...alternativeFonts],
				roboto: ['"Roboto Condensed"', ...alternativeFonts],
				caravan: ['"Caravan"', ...alternativeFonts],
			},
			keyframes: {
				growXWidth: {
					"0%": { width: "0" },
				},
				growYHeight: {
					"0%": { height: "0" },
				},
			},
			animation: {
				gw: "growXWidth 0.9s both",
				gh: "growYHeight 0.9s both",
			},
		},
	},
	plugins: [formsPlugin, animationDelayPlugin],
};
