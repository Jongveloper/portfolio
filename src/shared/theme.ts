export const theme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    warning: '#FF9500',
    error: '#FF3B30',
    background: {
      light: '#FFFFFF',
      dark: '#000000',
    },
    text: {
      light: '#000000',
      dark: '#FFFFFF',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  typography: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
    },
  },
  effects: {
    blur: {
      light: 'rgba(255, 255, 255, 0.8)',
      dark: 'rgba(0, 0, 0, 0.8)',
    },
  },
} as const;

export type Theme = typeof theme;
