import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Poster, PosterProps } from '.';
import mock from './mock';

const props: PosterProps = mock;

describe('<Poster />', () => {
  it('should render', () => {
    renderTheme(<Poster {...props} />);

    expect(
      screen.getByRole('img', { name: 'Doutor Estranho' }),
    ).toBeInTheDocument();
  });
});
