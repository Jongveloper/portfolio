import React from 'react';

import { ThemeProvider } from '@emotion/react';

import { theme } from '../../src/shared/theme';

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
