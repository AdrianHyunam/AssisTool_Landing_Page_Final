// import type { Config } from 'tailwindcss'

// export default {
//   theme: {
//     extend: {
//       screens: {
//         'sm': '640px',
//         'md': '768px',
//         'lg': '1280px',
//         'xl': '1536px',
//         '2xl': '1920px',
//       },
//     },
//   },
// } satisfies Config

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // Ajusta las rutas según tu proyecto
  theme: {
    extend: {},
  },
  plugins: [],
};