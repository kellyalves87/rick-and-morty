export const components = {
  button: {
    primary: {
      background: '#08C952',
      color: '#FFFFFF',
      hoverBackground: '#04A442',
    },
    secondary: {
      background: '#1a202c',
      color: '#FFFFFF',
      hoverBackground: '#2d3748',
    },
    clear: {
      background: '#FFFFFF',
      color: '#08C952',
      hoverBackground: '#F7FAFC',
    },
  },
  card: {
    background: '#FFFFFF',
    hoverTransform: 'scale(1.05)',
    transition: '0.3s ease-in-out',
  },
} as const;
