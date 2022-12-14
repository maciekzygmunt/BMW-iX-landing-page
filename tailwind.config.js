module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        inset: 'inset 70px 0 100px -7px rgba(0,0,0,0.4);',
        vignette: 'inset 0 0 5em 1em #000;',
      },
      screens: {
        '3xl': '1700px',
        '4xl': '1900px',
      },
      fontFamily: {
        cairo: ['Cairo'],
        'open-sans': ['Open-Sans', 'sans-serif'],
        roboto: ['Roboto'],
      },
      colors: {
        'BMW-blue': '#3369D3',
        'BMW-grey': '#4E4E4E',
      },
      boxShadow: {
        form: '0px 0px 41px 6px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
