module.exports = {
 purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
         hero: "url('/assets/hero/home-1.png')"
      }),
      colors: {
      black: '#0b1320',
      primary: '#0B1320',
      secondary: '#EAEDF2',
      white:'#ffffff',
      project: {
        primary:'#0066F5',
        secondary: '#F2F4FA',
        bg: '#E7EAEF',
        50: '#EBF0FA',
        100: '#E3ECFA',
        200: '#D4E3FA',
        300: '#B6D1F9',
        400:'#79ADF8'
      },
      gray: {
        50: '#E7EAEF',
        100: '#DDE0E5',
        200: '#CFD2D8',
        300: '#B3B7BE',
        400:'#7B8089'
      },
      
    }
    },
   
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
