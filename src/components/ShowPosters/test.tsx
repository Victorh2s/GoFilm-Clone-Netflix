import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ShowPosters, ShowPostersProps } from '.';
import { Science_fiction } from '../../service';

const props: ShowPostersProps = {
  APIurl: Science_fiction,
};

//heading
//button left
//button right

describe('<ShowPosters />', () => {
  it('should render heading', () => {
    renderTheme(<ShowPosters {...props} />);

    expect(
      screen.getByRole('heading', { name: 'Ficção Científica' }),
    ).toBeInTheDocument();
  });

  it('should put -150px in the left margin when right clicking', () => {
    renderTheme(<ShowPosters {...props} />);
    const button = screen.getByLabelText('Button Right');
    const Container = screen.getByLabelText('Container');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(Container).toHaveStyle({ 'margin-left': '-180px' });
  });

  it('should leave margin left at 0 when left clicking', () => {
    renderTheme(<ShowPosters {...props} />);
    const button = screen.getByLabelText('Button Left');
    const Container = screen.getByLabelText('Container');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(Container).toHaveStyle({ 'margin-left': '0px' });
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<ShowPosters {...props} />);

    expect(container).toMatchSnapshot();
  });
});
