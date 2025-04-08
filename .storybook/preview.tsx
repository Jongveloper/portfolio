import { controlsConfig } from './config/controls';
import { decorators } from './config/decorators';
import { viewportConfig } from './config/viewport';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: controlsConfig,
    viewport: viewportConfig,
  },
  decorators,
};

export default preview;
