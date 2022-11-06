const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
			},
			fontFamily: {
				sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-fluid-type')],
	darkMode: 'class',
};

/* 
  Alternative tailwind.config.js
*/

//module.exports = {
//  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
//  theme: {
//    extend: {
//      fontFamily: {
//        sans: ["Inter", ...defaultTheme.fontFamily.sans],
//      },
//      colors: {
//        primary: "var(--color-primary)",
//        secondary: "var(--color-secondary)",
//      },
//      textColor: {
//        default: "var(--color-text)",
//        offset: "var(--color-text-offset)",
//      },
//      backgroundColor: {
//        default: "var(--color-background)",
//        offset: "var(--color-background-offset)",
//      },
//      borderColor: {
//        default: "var(--color-border)",
//      },
//    },
//  },
//  corePlugins: {
//    fontSize: false,
//  },
//  plugins: [require("tailwindcss-fluid-type")],
//};
