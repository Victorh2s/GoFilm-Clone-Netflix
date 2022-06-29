import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

describe('<Menu />', () => {
  it('should render images', () => {
    renderTheme(<Menu />);

    expect(screen.getByLabelText('Netflix')).toBeInTheDocument();
    expect(screen.getByLabelText('Icone')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('should render background dark when ScrollY > 10 ', () => {
    let scrolled = false;

    const { container } = renderTheme(<Menu />);
    const menu = screen.getByLabelText('menu');

    window.addEventListener('scroll', () => (scrolled = !scrolled), false);

    fireEvent.scroll(window, { target: { scrollY: 110 } });
    expect(menu).toHaveStyle({ background: '#0d0c0c' });

    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(menu).toHaveStyle({ background: 'transparent' });
  });

  it('should match to snapshot ', () => {
    const { container } = renderTheme(<Menu />);

    expect(container).toMatchSnapshot();
  });
});
