import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header, HeaderProps } from '.';
import { tv } from '../../service';
import { vitest } from 'vitest';
const props: HeaderProps = {
  APIurl: tv,
};

describe('<Header />', () => {
  it('should render the components', () => {
    renderTheme(<Header {...props} />);

    expect(
      screen.getByRole('button', { name: 'Assistir' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Minha Lista' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('heading')).toBeInTheDocument();

    expect(screen.getByText(/pontos/i)).toBeInTheDocument();
    expect(screen.getByText(/Ano/i)).toBeInTheDocument();
    expect(screen.getByText(/temporadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Gêneros/i)).toBeInTheDocument();
  });

  it('should render styles', () => {
    renderTheme(<Header {...props} />);

    expect(screen.getByLabelText('Wrapper')).toHaveStyle({
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    });
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Header {...props} />);

    expect(container).toMatchSnapshot();
  });
});

// global.fetch = vitest.fn();

// const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

// it('should render response api', async () => {
//   renderTheme(<Header {...props} />);

//   mockFetch.mockResolvedValue({
//     json: () => Promise.resolve(5),
//   } as any);

//   await (
//     await waitFor(() => expect(screen.getByText(/pontos/i)))
//   ).toBeInTheDocument();
// });

// it('should render response api', async () => {
//   renderTheme(<Header {...props} />);

//   mockFetch.mockRejectedValue(undefined);

//   await (
//     await waitFor(() => expect(screen.getByText(/pontos/i)))
//   ).toBeInTheDocument();
// });
