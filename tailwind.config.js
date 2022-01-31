const colors = require('tailwindcss/colors')
module.exports = {
 purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body:['myriad-pro',' sans-serif']
    },
    extend: {
      screens: {
         sm: {'max': '768px'},
    },
      backgroundImage: theme => ({
        hero: "url('https://storage.googleapis.com/ktern-public-files/website/Hero/ktern-ai-hero.png')",
        herogradient: 'radial-gradient(circle at 75% calc(100% + 20px),#222 0,#727272 90%)',
        cta: "url('/assets/five-stars.svg')",
        downarrow: "url('/assets/icons/down-arrow.png')",
        values_gradient:"url('/assets/bg-gradient.png')",
        background:"url('/background.svg')",
        partnercontact:"url('/contact-bg.svg')",
        blob:"url('/blob.svg')",
        dots:"url('/bullets-gray-left.svg')",
        banner:"url('/events/banner-1.jpg')",
        eventsbg:"url('/events-landing/pattern.svg')",
        events:"url('/events/events-bg.svg')",
        roadshowbg:"url('/events-landing/events-bg.svg')"
      }),
      colors: {
        success: '#BADA55',
      black: '#0b1320',
      primary: '#0B1320',
      secondary: '#EAEDF2',
      white:'#ffffff',
      teal:colors.teal,
      amber:colors.amber,
      sky:colors.sky,
      violet:colors.violet,
      cyan:colors.cyan,
      rose:colors.rose,
      indigo:colors.indigo,
      bg:'#F9FAFC',
      projects: {

          primary: '#2666BA',

          secondary: '#DDE9F8',

          50: '#BBD3F1',

          100: '#78A6E3',

          200: '#5690DC',

          300: '#347AD5',

          400: '#2666BA',

        },
        process: {

          primary: '#795091',

          secondary: '#D9CAE2',



          50: '#C7B0D4',

          100: '#B496C5',

          200: '#A17BB7',

          300: '#8E61A8',

          400: '#634176',

        },
        maps: {

          primary: '#E07F00',

          secondary: '#FFDCAD',



          50: '#FFCA85',

          100: '#FFB85C',

          200: '#FFA733',

          300: '#FF950A',

          400: '#F28900',
500:'#F28900'
        },
        mines: {

          primary: '#BA2926',

          secondary: '#F1BCBB',



          50: '#EA9B99',

          100: '#E37978',

          200: '#DC5856',

          300: '#D53734',

          400: '#BA2926',

        },
        labs: {

          primary: '#26BA2B',

          secondary: '#BBF1BD',



          50: '#99EA9C',

          100: '#78E37B',

          200: '#56DC5A',

          300: '#34D539',

          400: '#1C8720',

        },
        dxaas: {
           primary: '#607A80',
          secondary: '#D0DADC',
       300:'#738F96'  ,
       200:'#8BA2A7',
       100:'#A2B5B9',
       50:'#B9C8CA', 
      400:'#354346'
        },
      gray: {
        10:'#858B91',
        50: '#E7EAEF',
        100: '#DDE0E5',
        200: '#CFD2D8',
        300: '#B3B7BE',
        400:'#7B8089'
      },
       backgroundSize: {
       '50%': '50%',
       '16': '4rem',
      }
    }
    },
    borderRadius: {
       none: '0',
       sm: '0.125rem',
       DEFAULT: '0.25rem',
       DEFAULT: '4px',
       md: '0.375rem',
       lg: '0.5rem',
       full: '9999px',
      large: '200px',
      xl: '14px',
      xl10:'30px',
      wide:'500px',
      '3xl':'60px',
      doublefull:'15000px'
    }
  },
  variants: {
    extend: {},
    overflow: ['responsive'],
  },
  plugins: [
    
  ],
  corePlugins: {
  
     fontFamily: false,
  }
}
