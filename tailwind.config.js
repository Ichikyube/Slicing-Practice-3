/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '40em': '40em'
      },
      colors: {
        myDarkBlue: 'hsl(233, 26% , 24% )',
        myLimeGreen: 'hsl(136, 65% , 51% )',
        myBrightCyan: 'hsl(192, 70% , 51% )',
        myGrayishBlue: 'hsl(233, 8% , 62% )',
        myLightGrayishBlue: 'hsl(220, 16% , 96% )',
        myVeryLightGray: 'hsl(0, 0% , 98% )',
        myWhite: 'hsl(0, 0% , 100% )'
      },
      backgroundImage: {
        'intro-desktop': "url('/images/bg-intro-desktop.svg')",
        'intro-mobile': "url('/img/bg-intro-mobile.png')"
      },
    },
  },
  plugins: [],
}
