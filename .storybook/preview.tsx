import React from 'react';

import type { Decorator, Preview } from '@storybook/react';

const withActions: Decorator = (Story, context) => {
  return <Story {...context} />;
};

const withAccessibility: Decorator = (Story, context) => {
  return <Story {...context} />;
};

const withInteraction: Decorator = (Story, context) => {
  return <Story {...context} />;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '360px',
            height: '640px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
            selector: '*:not(.css-1a6dvpz, .css-1fuk41d, .css-1p1azt3)',
          },
        ],
      },
    },
    interactions: {
      disable: false,
    },
  },
  decorators: [withActions, withAccessibility, withInteraction],
};

export default preview;
