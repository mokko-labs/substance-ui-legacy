const theme = {

  colors: {
    primary: '#1EB0E9',
    secondary: '#FFBF00',

    heading: '#313131', // Heading Text Color
    paragraph: '#888888', // Paragraph Text Color

    monochrome: '#545454',
    success: '#93E522', // Success State
    warning: '#FADB4A', // Warning State
    error: '#FF3E00', // Error State
  },

  fonts: {
    baseSize: '16px', // Base Font Size
    heading: ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',  // Heading Fonts
    paragraph: ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"' // Paragraph Fonts
  },

  card: {
    bg: '#FFFFFF'
  },

  sidebar: {
    bg: '#FFFFFF',
    width: 300,

    links: {
      padding: '0px 40px',
      fontSize: 15,
      fontWeight: 300,
      lineHeight: '50px',
      color: '#888888',
      activeFontSize: 22,
      activeFontWeight: 800,
      activeColor: '#313131'
    },
  },

  animations: {
    fast: '250ms',
    medium: '500ms',
    slow: '1000ms'
  }
};

export default theme;
