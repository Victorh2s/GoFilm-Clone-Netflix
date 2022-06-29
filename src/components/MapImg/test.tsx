import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MapImg, MapImgProps } from '.';

const props: MapImgProps = {
  srcImg:
    'https://images.unsplash.com/photo-1563456162378-f3b6b200289c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=360&ixid=MnwxfDB8MXxyYW5kb218MHx8cnx8fHx8fDE2NTU1OTI3NDc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=360',
  title: 'Titulo',
  id: 1,
  type: 'movie',
};

describe('<MapImg />', () => {
  it('should render img and link', () => {
    renderTheme(<MapImg {...props} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
