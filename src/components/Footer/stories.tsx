import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
