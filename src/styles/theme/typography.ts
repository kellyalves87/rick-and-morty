export const typography = {
  fontFamily: {
    title: 'get_schwifty, sans-serif',
    primary: 'RickAndMorty, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    small: '0.875rem',   // 14px
    base: '1rem',        // 16px
    large: '1.25rem',    // 20px
    xl: '1.5rem',        // 24px
    '2xl': '2rem',       // 32px
    '3xl': '2.5rem',     // 40px
    '4xl': '3rem',       // 48px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  }
} as const;
