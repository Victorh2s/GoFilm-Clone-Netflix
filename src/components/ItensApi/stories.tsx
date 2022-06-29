import { Meta, Story } from '@storybook/react/types-6-0';
import { ItensApi, ItensApiProps } from '.';

export default {
  title: 'ItensApi',
  component: ItensApi,
} as Meta<ItensApiProps>;

export const Template: Story<ItensApiProps> = (args) => {
  return (
    <div>
      <ItensApi {...args} />
    </div>
  );
};
