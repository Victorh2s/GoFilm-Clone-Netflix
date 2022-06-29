import { Meta, Story } from '@storybook/react/types-6-0';
import { Science_fiction } from 'service';
import { SlideFilms, SlideFilmsProps } from '.';

export default {
  title: 'SlideFilms',
  component: SlideFilms,
  args: {
    APIurl: {
      url: Science_fiction.url,
      title: Science_fiction.title,
      slug: Science_fiction.slug,
    },
  },
} as Meta<SlideFilmsProps>;

export const Template: Story<SlideFilmsProps> = (args) => {
  return (
    <div>
      <SlideFilms {...args} />
    </div>
  );
};
