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
      },
      fontFamily: {
        cairo: ['Cairo'],
        'open-sans': ['"Open-Sans"'],
        roboto: ['Roboto'],
      },
      colors: {
        'BMW-blue': '#3369D3',
      },
    },
  },
  plugins: [],
};
