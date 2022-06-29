import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    htmlChildren:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime omnis sequi, possimus cupiditate corporis officiis aperiam magni dolorem adipisci ab repudiandae praesentium facere cum nemo quasi impedit recusandae ad excepturi.m',
  },
} as Meta<TextProps>;

export const Template: Story<TextProps> = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
