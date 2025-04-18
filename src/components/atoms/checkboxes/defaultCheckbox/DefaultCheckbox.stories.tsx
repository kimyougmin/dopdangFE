import type { Meta, StoryObj } from '@storybook/react';
import DefaultCheckbox from './DefaultCheckbox';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/DefaultCheckbox',
  component: DefaultCheckbox,
  parameters: {
    layout: 'centered',
    componentSubtitle: '체크박스 컴포넌트',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof DefaultCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '체크박스',
    checked: false,
    onChange: (checked: boolean) => console.log('체크박스 상태:', checked),
  },
};

export const Checked: Story = {
  args: {
    label: '체크된 체크박스',
    checked: true,
    onChange: (checked: boolean) => console.log('체크박스 상태:', checked),
  },
};
