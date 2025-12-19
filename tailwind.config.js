/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Tech Color Palette
        'tech-black': '#0a0a0a',
        'tech-dark': '#111111', 
        'tech-gray': '#1a1a1a',
        'tech-light-gray': '#2a2a2a',
        'tech-white': '#ffffff',
        'tech-blue': '#00d2ff',
        'tech-cyan': '#00ffff',
        'tech-purple': '#8b5cf6',
        'tech-green': '#39ff14',
        'tech-orange': '#ff6b35',
        'tech-yellow': '#ffd700',
        
        // Legacy colors for compatibility
        background: '#0a0a0a',
        foreground: '#ffffff',
        cursor: '#00d2ff',
        color0: '#0a0a0a',
        color1: '#111111',
        color2: '#1a1a1a',
        color3: '#2a2a2a',
        color4: '#00d2ff',
        color5: '#8b5cf6',
        color6: '#39ff14',
        color7: '#ffffff',
        color8: '#666666',
        color9: '#111111',
        color10: '#1a1a1a',
        color11: '#2a2a2a',
        color12: '#00d2ff',
        color13: '#8b5cf6',
        color14: '#39ff14',
        color15: '#ffffff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "tech-gradient-primary": "linear-gradient(135deg, #00d2ff 0%, #8b5cf6 100%)",
        "tech-gradient-secondary": "linear-gradient(135deg, #39ff14 0%, #00d2ff 100%)",
        "tech-gradient-accent": "linear-gradient(135deg, #ff6b35 0%, #ffd700 100%)",
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(0, 210, 255, 0.5)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-green': '0 0 20px rgba(57, 255, 20, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
