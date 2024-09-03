/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
    colors: {
        background: '#0b0a0b',
        foreground: '#aad1e9',
        cursor: '#aad1e9',
        color0: '#0b0a0b',
        color1: '#1E3052',
        color2: '#31244B',
        color3: '#462845',
        color4: '#334E67',
        color5: '#3F6899',
        color6: '#5BACF1',
        color7: '#aad1e9',
        color8: '#7692a3',
        color9: '#1E3052',
        color10: '#31244B',
        color11: '#462845',
        color12: '#334E67',
        color13: '#3F6899',
        color14: '#5BACF1',
        color15: '#aad1e9',
      },
    },
  },
  plugins: [],
};
