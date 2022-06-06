module.exports = {
  content: [
    "layouts/partials/**/*.html",
    "layouts/*.html"
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'mulish': 'Mulish',
        'eight-one': 'Eight One'
      },
      backgroundImage: {
        'header': "url('../images/bg-banner.png')",
        'hero': "url('../images/bg-hero.png')",
        'footer': "url('../images/bg-footer.png')"
      },
      colors: {
        pukara: {
          main: '#F3D02B',
          primary: '#E38718',
          second: '#1D2426',
          video: '#27262E'
        }
      }
    },
  },
  plugins: [],
}
