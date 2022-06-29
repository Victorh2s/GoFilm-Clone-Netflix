import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A illo possimus minus aliquid nemo minima, doloribus harum eius sint recusandae alias eum rerum ab neque et, blanditiis, molestiae exercitationem quas?',
  },
} as Meta<SectionContainerProps>;

export const Template: Story<SectionContainerProps> = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
