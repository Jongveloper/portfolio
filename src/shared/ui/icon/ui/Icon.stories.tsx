import { expect, fn, userEvent, within } from '@storybook/test';

import { Icon } from './Icon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'shared/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '아이콘 버튼 컴포넌트입니다.',
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'button-name',
            enabled: true,
          },
          {
            id: 'image-alt',
            enabled: true,
          },
        ],
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '아이콘의 크기를 지정합니다.',
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'IconSize' },
        defaultValue: { summary: 'medium' },
      },
    },
    name: {
      description: '아이콘의 종류를 지정합니다.',
      control: 'select',
      options: ['icon', 'close', 'menu', 'minimize', 'maximize', 'back', 'forward'],
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: 'icon' },
      },
    },
    onClick: {
      description: '클릭 이벤트 핸들러',
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    name: 'icon',
  },
};

export const Close: Story = {
  args: {
    size: 'medium',
    name: 'close',
  },
};

export const Menu: Story = {
  args: {
    size: 'medium',
    name: 'menu',
  },
};

export const Minimize: Story = {
  args: {
    size: 'medium',
    name: 'minimize',
  },
};

export const Maximize: Story = {
  args: {
    size: 'medium',
    name: 'maximize',
  },
};

export const Back: Story = {
  args: {
    size: 'medium',
    name: 'back',
  },
};

export const Forward: Story = {
  args: {
    size: 'medium',
    name: 'forward',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    name: 'icon',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    name: 'icon',
  },
};

export const ClickTest: Story = {
  args: {
    size: 'medium',
    name: 'icon',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    const iconButton = canvas.getByRole('button');

    expect(iconButton).toBeInTheDocument();

    await userEvent.click(iconButton);

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const AccessibilityTest: Story = {
  args: {
    size: 'medium',
    name: 'icon',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const iconButton = canvas.getByRole('button');

    const iconImage = canvas.getByRole('img');

    expect(iconImage).toHaveAttribute('alt', 'icon');

    expect(iconButton).toBeVisible();
    expect(iconButton).toBeEnabled();
  },
};

const IconGrid = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '2rem',
      padding: '1rem',
    }}
  >
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="icon" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>icon</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="close" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>close</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="menu" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>menu</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="minimize" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>minimize</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="maximize" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>maximize</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="back" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>back</p>
    </div>
    <div style={{ textAlign: 'center' }}>
      <Icon size="medium" name="forward" />
      <p style={{ margin: '0.5rem 0 0', fontSize: '12px' }}>forward</p>
    </div>
  </div>
);

export const AllIcons: Story = {
  render: () => <IconGrid />,
};
