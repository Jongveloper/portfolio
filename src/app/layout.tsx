import type { PropsWithChildren } from 'react';

import type { Metadata } from 'next';

import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="ko">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
