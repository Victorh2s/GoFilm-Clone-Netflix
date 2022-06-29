import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render img', () => {
    renderTheme(<Footer />);

    expect(screen.getAllByRole('img')).toHaveLength(2);

    expect(screen.getByRole('img', { name: 'linkedin' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'github' })).toBeInTheDocument();
  });
  it('should match0 snapshot', () => {
    const { container } = renderTheme(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
