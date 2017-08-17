
const pallete = {
  primary: '#00A8F3',
  secondary: '#FFCF00',
  monochrome: '#000',
  success: '#93E522',
  warning: '#FFCF00',
  error: '#FF3E00',
  default: '#C1C1C1'
};

const theme = {

  colors: pallete,

  card: {
    bg: '#ff0000'
  },

  button: {

    default: {
      bg: pallete.default,
      gradient: pallete.default,
      color: 'white'
    },
    primary: {
      bg: pallete.primary,
      gradient: 'linear-gradient(118.23deg, #00A8F3 0%, #59C1D3 100%)',
      color: 'white'
    },
    secondary: {
      bg: pallete.secondary,
      gradient: 'linear-gradient(322.34deg, #FFCF00 0%, #FFB100 100%)',
      color: 'white'
    },
    monochrome: {
      bg: pallete.monochrome,
      gradient: pallete.monochrome,
      color: 'white'
    },
    success: {
      bg: pallete.success,
      gradient: 'linear-gradient(322.34deg, #93E522 0%, #6CBB00 100%)',
      color: 'white'
    },
    warning: {
      bg: pallete.warning,
      gradient: 'linear-gradient(322.34deg, #FFCF00 0%, #FFB100 100%)',
      color: 'white'
    },
    error: {
      bg: pallete.error,
      gradient: pallete.error,
      color: 'white'
    }
  }

}

export default theme;
