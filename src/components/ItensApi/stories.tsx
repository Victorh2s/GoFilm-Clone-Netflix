import { Meta, Story } from '@storybook/react/types-6-0';
import { ItensApi, ItensApiProps } from '.';
import mock from './mock';

export default {
  title: 'ItensApi',
  component: ItensApi,
  args: mock,
} as Meta<ItensApiProps>;

export const Template: Story<ItensApiProps> = (args) => {
  return (
    <div>
      <ItensApi {...args} />
    </div>
  );
};
