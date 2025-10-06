/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					bg: "#0b0f19",
					primary: "#00f5d4",
					secondary: "#41a4ff",
				}
			},
			boxShadow: {
				glow: "0 0 20px rgba(0,245,212,0.6)",
			}
		}
	},
	darkMode: "class",
}
