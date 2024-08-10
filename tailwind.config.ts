import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-cursor": "radial-gradient(600px at 1172px 3370px, rgba(29, 78, 216, 0.15), transparent, black);"
        // radial-gradient(600px at 1172px 3370px, rgba(29, 78, 216, 0.15), transparent 80%)
      },
      colors: {
        'primary': '#0a192f',
        'seconde': '#64ffda',
        'paragraph': '#8892b0',
        'gray': '#ccd6f6',
        'grad': "radial-gradient(red 5%, yellow 15%, green 60%)"
      },
      fontFamily: {
        'primary': ['Calibre, Inter', "San Francisco", "SF Pro Text", '-apple-system', 'system-ui', 'sans-serif'],
        'seconde': [ "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", 'monospace'],
        'poppins': [ 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
