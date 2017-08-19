
import {rgb, adjustHue} from 'polished';

const pallete = {
  primary: '#6ABDF8',
  secondary: '#EA4466',
  monochrome: '#000',
  success: '#93E522',
  warning: '#FADB4A',
  error: '#FF3E00',
  default: '#C1C1C1'
};

const theme = {

  colors: pallete,

  card: {
    bg: '#FFFFFF'
  },

  sidebar: {
    bg: '#FFFFFF'
  },

  button: {

    default: {
      bg: pallete.default,
      gradient: pallete.default,
      color: 'white'
    },
    primary: {
      bg: pallete.primary,
      gradient: `linear-gradient(118.23deg, ${pallete.primary} 0%, ${adjustHue(-10, pallete.primary)} 100%)`,
      color: 'white'
    },
    secondary: {
      bg: pallete.secondary,
      gradient: `linear-gradient(322.34deg, ${pallete.secondary} 0%, ${adjustHue(-10, pallete.secondary)} 100%)`,
      color: 'white'
    },
    monochrome: {
      bg: pallete.monochrome,
      gradient: pallete.monochrome,
      color: 'white'
    },
    success: {
      bg: pallete.success,
      gradient: pallete.success,
      color: 'white'
    },
    warning: {
      bg: pallete.warning,
      gradient: pallete.warning,
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
