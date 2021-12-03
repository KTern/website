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
        hero: "url('/assets/hero/home-1.png')",
        herogradient: 'radial-gradient(circle at 75% calc(100% + 20px),#222 0,#727272 90%)',
        cta: "url('/assets/five-stars.svg')",
        downarrow: "url('/assets/icons/down-arrow.png')",
        values_gradient:"url('/assets/bg-gradient.png')",
        background:"url('/background.svg')",
        partnercontact:"url('/contact-bg.svg')"
      }),
      colors: {
        success: '#BADA55',
      black: '#0b1320',
      primary: '#0B1320',
      secondary: '#EAEDF2',
      white:'#ffffff',
      teal:colors.teal,
      projects: {

          primary: '#2666BA',

          secondary: '#F2F4FA',

          bg: '#E7EAEF',

          50: '#EBF0FA',

          100: '#E3ECFA',

          200: '#D4E3FA',

          300: '#B6D1F9',

          400: '#2666BA',

        },

        process: {

          primary: '#4D335C',

          secondary: '#C7B0D4',



          50: '#B496C5',

          100: '#A17BB7',

          200: '#8E61A8',

          300: '#795091',

          400: '#634176',

        },

        maps: {

          primary: '#F28900',

          secondary: '#FFF6EB',



          50: '#FFE2D6',

          100: '#FFD3C2',

          200: '#FFA785',

          300: '#FF9970',

          400: '#F28900',
500:'#F28900'
        },

        mines: {

          primary: '#BA2926',

          secondary: '#F3E4E2',



          50: '#FAF0F0',

          100: '#EAC2C5',

          200: '#DB959A',

          300: '#CD838C',

          400: '#BA2926',

        },

        labs: {

          primary: '#1C8720',

          secondary: '#E2F3E2',



          50: '#F0F9F3',

          100: '#D7F1DD',

          200: '#BEE7C8',

          300: '#3CCD60',

          400: '#1C8720',

        },
        dxaas: {
           primary: '#1B465F',
          secondary: '#EAEDF2',
      400:'#1B465F'
        },
      gray: {
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
