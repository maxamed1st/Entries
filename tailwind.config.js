export default {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes : ["dark", "light"]
  },
}
