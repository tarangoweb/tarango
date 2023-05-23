/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		fontSize: {
			xs: ["10px", "23.5px"],
			sm: ["14px", "20px"],
			base: ["16px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
			"2xl": ["30px", "35px"],
			"3xl": ["40px", "44px"],
			"4xl": ["48px", "56px"],
			"5xl": ["50px", "60px"],
			"6xl": ["64px", "72px"],
			"7xl": ["72px", "80px"],
			"8xl": ["80px", "80px"],
			"9xl": ["88px", "96px"],
		},
		fontFamily: {
			sans: ["'Cooper Hewitt'", "sans-serif"],
			serif: ["'Schnyder S'", "sans-serif"],
		},
		extend: {
			keyframes: {
				"slide-left": {
					"0%": { "background-position-x": "0px" },
					"100%": { "background-position-x": "2560px" },
				},
				"slide-right": {
					"0%": { "background-position-x": "1000px" },
					"100%": { "background-position-x": "-1560px" },
				},
				"slide-left-alt": {
					"0%": { "background-position-x": "-1000px" },
					"100%": { "background-position-x": "1560px" },
				},
				"vh-slide-left": {
					"0%": { "background-position-x": "0vh" },
					"100%": { "background-position-x": "355vh" },
				},
				"vh-slide-right": {
					"0%": { "background-position-x": "200vh" },
					"100%": { "background-position-x": "-155vh" },
				},
				"vh-slide-left-alt": {
					"0%": { "background-position-x": "100vh" },
					"100%": { "background-position-x": "455vh" },
				},
				"slide-up": {
					"0%": { "background-position-y": "0vw" },
					"100%": { "background-position-y": "1500px" },
				},
				"slide-down": {
					"0%": { "background-position-y": "1500px" },
					"100%": { "background-position-y": "0px" },
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
				"slide-left": "slide-left 40s linear infinite forwards",
				"slide-right": "slide-right 36s linear infinite",
				"slide-left-alt": "slide-left-alt 32s linear infinite",
				"vh-slide-left": "slide-left 40s linear infinite forwards",
				"vh-slide-right": "slide-right 36s linear infinite",
				"vh-slide-left-alt": "slide-left-alt 32s linear infinite",
				"slide-up": "slide-up 30s linear infinite",
				"slide-down": "slide-down 30s linear infinite",
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
					390: "#454545",
					400: "#434240",
					500: "#353634",
					600: "#282724",
				},
				cream: {
					500: "#F7F2E5",
				},
			},
			typography: ({ theme }) => ({
				sm: {
					css: {
						"font-size": "16px",
						"line-height": "20px",
						"max-width": "none",
					},
				},
				base: {
					css: {
						"font-size": "20px",
						"line-height": 1.5,
						"max-width": "none",
					},
				},
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
