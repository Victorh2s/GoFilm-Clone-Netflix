import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ItensApi, ItensApiProps } from '.';

const props: ItensApiProps = {
  id: 1,
  vote: 9.5,
  year: new Date('2016-07-15'),
  seasons: 5,
  description: 'Descrição',
  genresName: ['terror', 'comédia'],
};

describe('<ItensApi />', () => {
  it('should render Vote, Year, seasons, description, genresName', () => {
    renderTheme(<ItensApi {...props} />);

    expect(screen.getByText('9.5 pontos')).toBeInTheDocument();
    expect(screen.getByText('9.5 pontos')).toHaveStyle({
      display: 'inline-block',
    });
    expect(screen.getByText(/Ano 2016/i)).toBeInTheDocument();
    expect(screen.getByText(/Ano 2016/i)).toHaveStyle({
      display: 'inline-block',
    });
    expect(screen.getByText(/5 temporadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Descrição/i)).toBeInTheDocument();
    expect(screen.getByText(/terror, comédia/i)).toBeInTheDocument();
    expect(screen.getByText(/Assistir/i)).toBeInTheDocument();
    expect(screen.getByText(/Minha Lista/i)).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<ItensApi {...props} />);

    expect(container).toMatchSnapshot();
  });
});
