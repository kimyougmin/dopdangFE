import type { Meta, StoryObj } from '@storybook/react';
import InputLabel from './InputLabel';
import { fn } from '@storybook/test';
import React from 'react';

const meta = {
  title: 'Atoms/InputLabel',
  component: InputLabel,
  parameters: {
    layout: 'centered',
    componentSubtitle: 'Input에 어떤 값이 들어가는지 사용자에게 알려주는 레이블',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} as Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: '라벨' },
};
