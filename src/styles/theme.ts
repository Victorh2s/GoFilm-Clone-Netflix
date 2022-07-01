export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#C6C8CC',
    dark: '#0d0c0c',
    green: '#46d369',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
      worksans: "'Work Sans', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 870px)',
    lteSuperSmall: '(max-width: 450px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
