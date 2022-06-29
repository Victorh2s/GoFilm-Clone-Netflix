import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ButtonPlay, ButtonPlayProps } from '.';

const props: ButtonPlayProps = {
  id: 5,
};

describe('<ButtonPlay />', () => {
  it('should render button', () => {
    renderTheme(<ButtonPlay {...props} />);

    expect(
      screen.getByRole('button', { name: 'Assistir' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Assistir' })).toHaveStyle({
      padding: '0.5rem 2rem',
    });
  });

  it('should render link', () => {
    renderTheme(<ButtonPlay {...props} />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<ButtonPlay {...props} />);

    expect(container).toMatchSnapshot();
  });
});
