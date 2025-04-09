import { expect, userEvent, within } from '@storybook/test';

import { Tooltip } from './Tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'macOS 스타일의 툴팁 컴포넌트입니다. 호버 시 추가 정보를 제공합니다.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'tooltip',
            enabled: true,
          },
          {
            id: 'color-contrast',
            enabled: true,
            selector: '*:not(.css-1a6dvpz, .css-1fuk41d, .css-1p1azt3)',
          },
        ],
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: '툴팁에 표시할 내용',
      control: 'text',
    },
    placement: {
      description: '툴팁의 위치',
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    size: {
      description: '툴팁의 크기',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    delay: {
      description: '툴팁 표시 지연 시간(ms)',
      control: 'number',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

const Trigger = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      background: '#1a6ba8',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
  >
    Hover me
  </div>
);

export const Default: Story = {
  args: {
    content: 'Tooltip content',
    placement: 'top',
    size: 'medium',
    delay: 300,
    children: <Trigger />,
  },
};

export const Top: Story = {
  args: {
    content: 'Top tooltip',
    placement: 'top',
    children: <Trigger />,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Bottom tooltip',
    placement: 'bottom',
    children: <Trigger />,
  },
};

export const Left: Story = {
  args: {
    content: 'Left tooltip',
    placement: 'left',
    children: <Trigger />,
  },
};

export const Right: Story = {
  args: {
    content: 'Right tooltip',
    placement: 'right',
    children: <Trigger />,
  },
};

export const Small: Story = {
  args: {
    content: 'Small tooltip',
    size: 'small',
    children: <Trigger />,
  },
};

export const Large: Story = {
  args: {
    content: 'Large tooltip',
    size: 'large',
    children: <Trigger />,
  },
};

export const NoDelay: Story = {
  args: {
    content: 'Instant tooltip',
    delay: 0,
    children: <Trigger />,
  },
};

export const LongText: Story = {
  args: {
    content: '이것은 긴 텍스트가 포함된 툴팁입니다. macOS 스타일로 표시됩니다.',
    children: <Trigger />,
  },
};

export const HoverTest: Story = {
  args: {
    content: 'Hover test tooltip',
    children: <Trigger />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const trigger = canvas.getByText('Hover me');

    const tooltip = canvasElement.querySelector('[role="tooltip"]');
    expect(tooltip).toHaveAttribute('aria-hidden', 'true');

    await userEvent.hover(trigger);

    await new Promise(resolve => setTimeout(resolve, 350));

    expect(tooltip).toHaveAttribute('aria-hidden', 'false');

    await userEvent.unhover(trigger);

    expect(tooltip).toHaveAttribute('aria-hidden', 'true');
  },
};
