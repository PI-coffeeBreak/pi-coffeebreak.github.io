/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4f2b1d",
          "secondary": "#726351",
          "accent": "#fbbf24",
          "neutral": "#f8e8c9",
          "base-100": "#ffedd5",
          "info": "#93c5fd",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
  darkMode: ['class', '.darkmode'],
}
