/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: '15px',
	},
		screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            sm: '1200px'
		},
         fontFamily: {
             primary: "var(--font-jetbrainsMono)",
		 },

  	extend: {
		keyframes:{
            "accordation-down":{
              from : {height: "0"},
			  to : {height:"var(--radix-accordation-content-height)"}
			},
			
            "accordation-up":{
              from : {height:"var(--radix-accordation-content-height)"},
			  to : {height: "0"}
			},
		},
		animation:{
            "accordation-down":"accordation-down 0.2s ease-out",
			"accordation-up": "accordation-up 0.2s ease-out"
		},
  		colors: {
  			primary: '#1c1c22',
			accent: {
				DEFAULT: '#14b8a6',
				hover: '#14B8A6'
			}
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
