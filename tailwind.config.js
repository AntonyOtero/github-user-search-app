module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': ['13px', '20px'],
      'base': ['15px', '25px'],
      'lg': ['16px', '24px'],
      'xl': ['22px', '33px'],
      '2xl': ['26px', '38px'],
    },
    extend: {
      colors: {
        'theme-offwhite': 'rgb(246, 248, 255)',
        'theme-cool-100': 'rgb(105, 124, 154)',
        'theme-cool-200': 'rgb(75, 106, 155)',
        'theme-cool-300': 'rgb(43, 52, 66)',
        'theme-warm-100': 'rgb(30, 42, 71)',
        'theme-warm-200': 'rgb(20, 29, 47)',
        'theme-primary': 'rgb(0, 121, 255)',
      },
      borderRadius: {
        '10': '10px',
      },
      boxShadow: {
        'card': '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)',
      },
    },
  },
  plugins: [],
}
