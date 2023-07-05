export default {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes : ["dark", "light"]
  },
}
