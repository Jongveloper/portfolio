import { ThemeProvider } from '@emotion/react';

import { theme } from '../../src/styles/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
