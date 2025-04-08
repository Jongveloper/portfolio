'use client';

import type { PropsWithChildren } from 'react';

import { ThemeProvider } from '@emotion/react';

import { theme } from '@/shared/theme';

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
