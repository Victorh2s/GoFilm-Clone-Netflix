import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ButtonList, ButtonListProps } from '.';

const props: ButtonListProps = {
  id: 2,
};

describe('<ButtonList />', () => {
  it('should render button', () => {
    renderTheme(<ButtonList {...props} />);

    expect(
      screen.getByRole('button', { name: 'Minha Lista' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Minha Lista' })).toHaveStyle({
      padding: '0.5rem 2rem',
    });
  });

  it('should render link', () => {
    renderTheme(<ButtonList {...props} />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<ButtonList {...props} />);

    expect(container).toMatchSnapshot();
  });
});
