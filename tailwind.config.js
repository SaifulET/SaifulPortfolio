/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./app/components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#0FF0FC',
      accent: '#10F197',
      dark: '#0f0f0f',
      muted: '#a0a0a0',
      card: '#1a1a1a',
      white: '#ffffff',
    },
    fontFamily: {
      poppins: ['var(--font-poppins)', 'sans-serif'],
    },
    boxShadow: {
      neon: '0 0 16px #0FF0FC, 0 0 32px #10F197',
    },
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
};
export const plugins = [];