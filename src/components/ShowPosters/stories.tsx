import { Meta, Story } from '@storybook/react/types-6-0';
import { Science_fiction } from 'service';
import { ShowPosters, ShowPostersProps } from '.';

export default {
  title: 'ShowPosters',
  component: ShowPosters,
  args: {
    APIurl: {
      url: Science_fiction.url,
      title: Science_fiction.title,
      slug: Science_fiction.slug,
    },
  },
} as Meta<ShowPostersProps>;

export const Template: Story<ShowPostersProps> = (args) => {
  return (
    <div>
      <ShowPosters {...args} />
    </div>
  );
};
