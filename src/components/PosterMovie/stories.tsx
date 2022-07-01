import { Meta, Story } from '@storybook/react/types-6-0';
import { Poster, PosterProps } from '.';
import mock from './mock';

export default {
  title: 'Poster',
  component: Poster,
  args: mock,
} as Meta<PosterProps>;

export const Template: Story<PosterProps> = (args) => {
  return (
    <div>
      <Poster {...args} />
    </div>
  );
};
