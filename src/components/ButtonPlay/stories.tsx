import { Meta, Story } from '@storybook/react/types-6-0';
import { ButtonPlay, ButtonPlayProps } from '.';

export default {
  title: 'ButtonPlay',
  component: ButtonPlay,
} as Meta<ButtonPlayProps>;

export const Template: Story<ButtonPlayProps> = (args) => {
  return (
    <div>
      <ButtonPlay {...args} />
    </div>
  );
};
