import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header, HeaderProps } from '.';
import mock from './mock';

const props: HeaderProps = mock;

describe('<Header />', () => {
  it('should render the components', async () => {
    renderTheme(<Header {...props} />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('The Boys')).toBeInTheDocument();
    expect(screen.getByText('8.4 pontos')).toBeInTheDocument();
    expect(screen.getByText('1969')).toBeInTheDocument();
    expect(screen.getByText('3 temporadas')).toBeInTheDocument();
    expect(screen.getByText(/Em uma segunda temporada/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sci-Fi & Fantasy, Action & Adventure/i),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('should render styles', () => {
    renderTheme(<Header {...props} />);

    expect(screen.getByLabelText('Wrapper')).toHaveStyle({
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });
    expect(screen.getByLabelText('Wrapper')).toHaveStyle({
      display: 'block',
    });
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Header {...props} />);

    expect(container).toMatchSnapshot();
  });
});
