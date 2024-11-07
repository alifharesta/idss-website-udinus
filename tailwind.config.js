/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    screens: {
      "sm": "640px", // mobile
      "md": "768px", // tablet
      "lg": "1024px", // laptop
      "xl": "1280px", // desktop
      "2xl": "1536px", // tv or large desktop
    },
    extend: {
      fontFamily: {
        'poppins': ["Poppins"],
      },
      colors: {
        primary: {
          100: "#020617", // hitam judul H1
          200: "#111827", // abu content body text
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
  daisyui: {
    themes: [
      "bumblebee", // Tema default
      // Tambahkan tema kustom atau tema DaisyUI lainnya di sini
    ],
  },
}
