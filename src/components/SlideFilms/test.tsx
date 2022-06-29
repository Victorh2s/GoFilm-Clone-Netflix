import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SlideFilms, SlideFilmsProps } from '.';
import { Science_fiction } from './../../service';

const props: SlideFilmsProps = {
  APIurl: Science_fiction,
};

//heading
//button left
//button right

describe('<SlideFilms />', () => {
  it('should render heading', () => {
    renderTheme(<SlideFilms {...props} />);

    expect(
      screen.getByRole('heading', { name: 'Ficção Científica' }),
    ).toBeInTheDocument();
  });

  it('should put -150px in the left margin when right clicking', () => {
    renderTheme(<SlideFilms {...props} />);
    const button = screen.getByLabelText('Button Right');
    const Container = screen.getByLabelText('Container');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(Container).toHaveStyle({ 'margin-left': '-200px' });
  });

  it('should leave margin left at 0 when left clicking', () => {
    renderTheme(<SlideFilms {...props} />);
    const button = screen.getByLabelText('Button Left');
    const Container = screen.getByLabelText('Container');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(Container).toHaveStyle({ 'margin-left': '0px' });
  });
});
