import type { Meta, StoryObj } from '@storybook/react';
import Section from '@/app/components/pieces/section';

const meta: Meta<typeof Section> = {
  title: 'Pieces/Section',
  component: Section,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Section>;

export const DefaultTheme: Story = {
  args: {
    id: 'section-1',
    divClasses: 'p-4 ',
    sectionClasses: 'my-4',
    theme: 'wsts',
    children: (
      <div>
        <h1 className="text-2xl font-bold">This is a section</h1>
        <p>This section component can have any content as children.</p>
      </div>
    ),
  }
};

export const SecondaryTheme: Story = {
  args: {
    id: 'section-1',
    divClasses: 'p-4 ',
    sectionClasses: 'my-4',
    theme: 'wsts-secondary',
    children: (
      <div className=''>
        <h1 className="text-2xl font-bold text-primary">This is a section</h1>
        <p className='text-base-content'>This section component can have any content as children.</p>
      </div>
    ),
  }
};
