/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: { /** CSS Custom Properties for Markdown Articles */
        DEFAULT: {
          css: {
            maxWidth: '80ch', // 80 characters per line instead of 65
          },
        },
      },
    },
  },
  plugins: [
      require('daisyui'),
      require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        coffeeLight: {
          "primary": "#4f2b1d",
          "secondary": "#726351",
          "accent": "#fbbf24",
          "neutral": "#f8e8c9",
          "neutral-content": "#4F4F4F",
          "base-100": "#ffffff",
          "base-200": "#f8f9fa",
          "base-300": "#e9ecef",
          "base-content": "#1f2937",
          "info": "#93c5fd",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },

        coffeeDark: {
          "primary": "#e5c49e",
          "secondary": "#726351",
          "accent": "#fbbf24",
          "neutral": "#4F4F4F",
          "neutral-content": "#e9ecef",
          "base-100": "#323232",
          "base-200": "#2d2d2d",
          "base-300": "#242424",
          "base-content": "#e9ecef",
          "info": "#93c5fd",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        }
      },
    ],
  },
  darkMode: ['class', '.darkmode'],
}
