import { Meta, Story } from '@storybook/react/types-6-0';
import { ButtonList, ButtonListProps } from '.';

export default {
  title: 'ButtonList',
  component: ButtonList,
} as Meta<ButtonListProps>;

export const Template: Story<ButtonListProps> = (args) => {
  return (
    <div>
      <ButtonList {...args} />
    </div>
  );
};
