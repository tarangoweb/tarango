/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontFamily: {
			sans: ["'Cooper Hewitt'", "sans-serif"],
			serif: ["'Schnyder S'", "sans-serif"],
		},
		extend: {
			keyframes: {
				"slide-left": {
					"0%": { "background-position-x": "0vh" },
					"100%": { "background-position-x": "355vh" },
				},
				"slide-right": {
					"0%": { "background-position-x": "200vh" },
					"100%": { "background-position-x": "-155vh" },
				},				
				"slide-left-alt": {
					"0%": { "background-position-x": "100vh" },
					"100%": { "background-position-x": "455vh" },
				},
				"slide-up": {
					"0%": { "background-position-y": "0px" },
					"100%": { "background-position-y": "258vw" },
				},
				"slide-down": {
					"0%": { "background-position-y": "100vw" },
					"100%": { "background-position-y": "-158vw" },
				},
				"fade-in": {
					"0%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
				"fade-out": {
					"0%": { opacity: "100%" },
					"100%": { opacity: "0%" },
				},
			},
			animation: {
				"slide-left": "slide-left 40s linear infinite",
				"slide-right": "slide-right 36s linear infinite",
				"slide-left-alt": "slide-left-alt 32s linear infinite",
				"slide-up": "slide-up 80s linear infinite",
				"slide-down": "slide-down 80s linear infinite",
				"fade-in": "fade-in 0.4s ease-out forwards",
				"fade-out": "fade-out 0.2s ease-out forwards",
			},
			colors: {
				gray: {
					100: "#F2F2EB",
					150: "#D9D9D9",
					170: "#C4C4C4",
					200: "#858585",
					300: "#616161",
					400: "#434240",
					500: "#353634",
					600: "#282724",
				},
				cream: {
					500: "#F2F2EB",
				},
			},
			typography: ({ theme }) => ({
				"on-light": {
					css: {
						"--tw-prose-body": theme("colors.gray[400]"),
						"--tw-prose-headings": theme("colors.gray[400]"),
						"--tw-prose-lead": theme("colors.gray[400]"),
						"--tw-prose-links": theme("colors.gray[400]"),
						"--tw-prose-bold": theme("colors.gray[400]"),
					},
				},
				"on-dark": {
					css: {
						"--tw-prose-body": theme("colors.gray[100]"),
						"--tw-prose-headings": theme("colors.gray[100]"),
						"--tw-prose-lead": theme("colors.gray[100]"),
						"--tw-prose-links": theme("colors.gray[100]"),
						"--tw-prose-bold": theme("colors.gray[100]"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
	corePlugins: {
		container: false,
	},
};
