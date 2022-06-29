import { Meta, Story } from '@storybook/react/types-6-0';
import { Header, HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    APIurl: {
      url: 'https://api.themoviedb.org/3/tv/popular?api_key=c9bae717b9f2ef8bb8470846b62a50b1&language=pt-BR&page=1',
    },
  },
} as Meta<HeaderProps>;

export const Template: Story<HeaderProps> = (args) => {
  return (
    <div>
      <Header {...args} />
    </div>
  );
};
