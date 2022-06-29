import { Meta, Story } from '@storybook/react/types-6-0';
import { MapImg, MapImgProps } from '.';

export default {
  title: 'MapImg',
  component: MapImg,
  args: {
    key: 1,
    srcImg:
      'https://images.unsplash.com/photo-1563456162378-f3b6b200289c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2NTU1OTI3NDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
    title: 'Titulo',
  },
} as Meta<MapImgProps>;

export const Template: Story<MapImgProps> = (args) => {
  return (
    <div>
      <MapImg {...args} />
    </div>
  );
};
