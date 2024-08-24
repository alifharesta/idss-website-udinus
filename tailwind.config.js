/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "320px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1440px",
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
  ],
  daisyui: {
    themes: [
      "retro", // Tema default
      // Tambahkan tema kustom atau tema DaisyUI lainnya di sini
    ],
  },
}
